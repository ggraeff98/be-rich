import React, { useState } from 'react';
import closeIcon from '../../assets/svgs/close.svg';
import hamburguerIcon from '../../assets/svgs/hamburguer-menu.svg';
import styled from 'styled-components';

const StyledDivContainer = styled.div``;
const StyledDivListItems = styled.div`
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
  left: ${(props) => (props.isOpen ? '0%' : '-100%')};
  transition: 1s;
  top: 90px;
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

  const lateralMenuIcon = lateralMenuState.isOpen ? (
    <img
      src={closeIcon}
      alt="close-menu"
      onClick={() => onChangeMenuLateralState(false)}
    ></img>
  ) : (
    <img
      src={hamburguerIcon}
      alt="open-menu"
      onClick={() => onChangeMenuLateralState(true)}
    ></img>
  );

  return (
    <StyledDivContainer>
      {lateralMenuIcon}
      <StyledDivListItems isOpen={lateralMenuState.isOpen}>
        {props.children}
      </StyledDivListItems>
    </StyledDivContainer>
  );
};

export default LateralMenu;
