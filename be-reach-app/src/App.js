import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import LateralMenu from './components/LateralMenu/LateralMenu';
import styled from 'styled-components';
import { IPAD_PRO } from './constants/breakPointConstants';
import LateralMenuProvider from './contexts/lateral-menu-context';
import { Route } from 'react-router-dom';
import MobileHeader from './components/PageHeader/MobileHeader/MobileHeader';
import PageContent from './components/PageContent/PageContent';

const StyleedDivMain = styled.div`
  touch-action: manipulation;
  font-family: 'Ubuntu';
  height: 100vh;
  display: flex;
`;

const App = () => {
  return (
    <StyleedDivMain>
      {window.innerWidth <= IPAD_PRO + 1 ? (
        <LateralMenuProvider>
          <MobileHeader></MobileHeader>
          <LateralMenu>
            <PageHeader></PageHeader>
          </LateralMenu>
          <PageContent></PageContent>
        </LateralMenuProvider>
      ) : (
        <PageHeader></PageHeader>
      )}
    </StyleedDivMain>
  );
};

export default App;
