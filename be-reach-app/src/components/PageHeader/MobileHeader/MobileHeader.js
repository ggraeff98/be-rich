import React, { useContext } from 'react';
import hamburguerIcon from '../../../assets/svgs/hamburguer-menu.svg';
import styled from 'styled-components';
import { LateralMenuContext } from '../../../contexts/lateral-menu-context';
import SearchBar from '../../SearchBar/SearchBar';
import { NORMAL_WHITE } from '../../../constants/styleConstants';

const StyledMobileHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: ${NORMAL_WHITE};
  width: 100%;
`;

const StyledToggleMenuIcons = styled.img`
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledPageContentBackgorund = styled.div`
  position: absolute;
  height: ${(props) => (props.lateralMenuState ? '100vh' : '0px')};
  width: 100%;
  top: 0;
  background-color: ${(props) =>
    props.lateralMenuState ? 'rgba(0, 0, 0, 0.3)' : 'trasparent'};
`;

const MobileHeader = () => {
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
    <StyledMobileHeaderContainer>
      {openLateralMenuIcon}
      <SearchBar></SearchBar>
      <StyledPageContentBackgorund
        onClick={onChangeMenuLateralState}
        lateralMenuState={lateralMenuContext.lateralMenuState}
      ></StyledPageContentBackgorund>
    </StyledMobileHeaderContainer>
  );
};

export default MobileHeader;
