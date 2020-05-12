import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import LateralMenu from './components/LateralMenu/LateralMenu';
import styled from 'styled-components';
import { IPAD_PRO } from './constants/breakPointConstants';
import LateralMenuProvider from './contexts/lateral-menu-context';
import MobileHeader from './components/PageHeader/MobileHeader/MobileHeader';
import PageContent from './components/PageContent/PageContent';

const StyleedDivMain = styled.div`
  touch-action: manipulation;
  font-family: 'Barlow Condensed';
  display: flex;
  max-height: 100vh;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const StyledNormalPage = styled.div`
  width: 100%;
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
        <StyledNormalPage>
          <PageHeader></PageHeader>
          <PageContent></PageContent>
        </StyledNormalPage>
      )}
    </StyleedDivMain>
  );
};

export default App;
