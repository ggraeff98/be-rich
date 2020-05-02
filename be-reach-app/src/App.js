import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import LateralMenu from './components/LateralMenu/LateralMenu';
import styled from 'styled-components';
import { IPAD_PRO } from './constants/breakPointConstants';

const StyleedDivMain = styled.div`
  touch-action: manipulation;
`;

function App() {
  return (
    <StyleedDivMain>
      {window.innerWidth <= IPAD_PRO + 1 ? (
        <LateralMenu>
          <PageHeader></PageHeader>
        </LateralMenu>
      ) : (
        <PageHeader></PageHeader>
      )}
    </StyleedDivMain>
  );
}

export default App;
