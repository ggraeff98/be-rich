import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import LateralMenu from './components/LateralMenu/LateralMenu';
import styled from 'styled-components';
import { IPAD_PRO } from './constants/breakPointConstants';
import LateralMenuProvider from './contexts/lateral-menu-context';

const StyleedDivMain = styled.div`
  touch-action: manipulation;
  font-family: 'Ubuntu';
`;

const App = () => {
  return (
    <StyleedDivMain>
      {window.innerWidth <= IPAD_PRO + 1 ? (
        <LateralMenuProvider>
          <LateralMenu>
            <PageHeader></PageHeader>
          </LateralMenu>
        </LateralMenuProvider>
      ) : (
        <PageHeader></PageHeader>
      )}
    </StyleedDivMain>
  );
};

export default App;
