import React, { useState } from 'react';
import closeIcon from '../../assets/svgs/close.svg';
import hamburguerIcon from '../../assets/svgs/hamburguer-menu.svg';
import styled from 'styled-components';
import { LIGHT_GOLDEN } from '../../constants/styleConstants';

const StyledDivContainer = styled.div``;

const StyledDivListItems = styled.div`
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
  left: ${(props) => (props.isOpen ? '0%' : '-100%')};
  transition: 1s;
  top: 70px;
  background-color: ${LIGHT_GOLDEN};
  padding-top: 5px;
`;

const StyledToggleMenuIcons = styled.img`
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

StyledDivListItems.defaultProps = {
  isOpen: false
};

const LateralMenu = (props) => {
  const [lateralMenuState, setLateralMenuState] = useState({
    isOpen: false
  });

  const onChangeMenuLateralState = (show) => {
    setLateralMenuState({
      isOpen: show
    });
  };

  const openLateralMenuIcon = (
    <StyledToggleMenuIcons
      src={hamburguerIcon}
      alt="open-menu"
      onClick={() => onChangeMenuLateralState(true)}
    ></StyledToggleMenuIcons>
  );

  const closeLateralMenuIcon = (
    <StyledToggleMenuIcons
      src={closeIcon}
      alt="close-menu"
      onClick={() => onChangeMenuLateralState(false)}
    ></StyledToggleMenuIcons>
  );

  return (
    <StyledDivContainer>
      {!lateralMenuState.isOpen ? openLateralMenuIcon : null}
      <StyledDivListItems isOpen={lateralMenuState.isOpen}>
        {closeLateralMenuIcon}
        {props.children}
      </StyledDivListItems>
    </StyledDivContainer>
  );
};

export default LateralMenu;
