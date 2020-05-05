import React, { useContext } from 'react';
import styled from 'styled-components';
import closeIcon from '../../assets/svgs/close.svg';
import hamburguerIcon from '../../assets/svgs/hamburguer-menu.svg';
import { LIGHT_GOLDEN } from '../../constants/styleConstants';
import { LateralMenuContext } from '../../contexts/lateral-menu-context';

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
  const lateralMenuContext = useContext(LateralMenuContext);

  const onChangeMenuLateralState = () => {
    lateralMenuContext.onToggleLateralMenu();
  };

  console.log(lateralMenuContext.lateralMenuState);

  const openLateralMenuIcon = (
    <StyledToggleMenuIcons
      src={hamburguerIcon}
      alt="open-menu"
      onClick={() => onChangeMenuLateralState()}
    ></StyledToggleMenuIcons>
  );

  const closeLateralMenuIcon = (
    <StyledToggleMenuIcons
      src={closeIcon}
      alt="close-menu"
      onClick={() => onChangeMenuLateralState()}
    ></StyledToggleMenuIcons>
  );

  return (
    <StyledDivContainer>
      {!lateralMenuContext.lateralMenuState ? openLateralMenuIcon : null}
      <StyledDivListItems isOpen={lateralMenuContext.lateralMenuState}>
        {closeLateralMenuIcon}
        {props.children}
      </StyledDivListItems>
    </StyledDivContainer>
  );
};

export default LateralMenu;
