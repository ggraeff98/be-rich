import React, { useContext } from 'react';
import styled from 'styled-components';
import hamburguerIcon from '../../assets/svgs/hamburguer-menu.svg';
import { LateralMenuContext } from '../../contexts/lateral-menu-context';

const StyledDivContainer = styled.div``;

const StyledMenuOpenIconContainer = styled.div`
  background: ${(props) => (!props.isOpen ? 'trasparent' : 'rgba(0, 0, 0, 0.3);')};
  height: ${(props) => (props.isOpen ? '100vh' : 'unset')};
  width: ${(props) => (!props.isOpen ? '0px' : '100%')};
`;

const StyledDivListItems = styled.nav`
  position: absolute;
  width: 75%;
  max-width: 500px;
  left: ${(props) => (props.isOpen ? '0%' : '-75%')};
  transition: 1s;
  height: 100%;
  top: 0;
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

  const openLateralMenuIcon = (
    <StyledToggleMenuIcons
      src={hamburguerIcon}
      alt="open-menu"
      onClick={() => onChangeMenuLateralState()}
    ></StyledToggleMenuIcons>
  );

  return (
    <StyledDivContainer>
      <StyledMenuOpenIconContainer
        onClick={onChangeMenuLateralState}
        isOpen={lateralMenuContext.lateralMenuState}
      >
        {openLateralMenuIcon}
      </StyledMenuOpenIconContainer>
      <StyledDivListItems isOpen={lateralMenuContext.lateralMenuState}>
        {props.children}
      </StyledDivListItems>
    </StyledDivContainer>
  );
};

export default LateralMenu;
