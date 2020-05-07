import React, { useContext } from 'react';
import styled from 'styled-components';
import { LateralMenuContext } from '../../contexts/lateral-menu-context';

const StyledDivContainer = styled.div``;

const StyledDivListItems = styled.nav`
  position: absolute;
  width: 75%;
  max-width: 500px;
  left: ${(props) => (props.isOpen ? '0%' : '-75%')};
  transition: 1s;
  height: 100%;
  top: 0;
`;

StyledDivListItems.defaultProps = {
  isOpen: false
};

const LateralMenu = (props) => {
  const lateralMenuContext = useContext(LateralMenuContext);

  return (
    <StyledDivContainer>
      <StyledDivListItems isOpen={lateralMenuContext.lateralMenuState}>
        {props.children}
      </StyledDivListItems>
    </StyledDivContainer>
  );
};

export default LateralMenu;
