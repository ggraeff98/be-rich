import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import LateralMenu from './components/LateralMenu/LateralMenu';
import styled from 'styled-components';

const StyleedDivMain = styled.div`
  touch-action: manipulation;
`;

function App() {
  return (
    <StyleedDivMain>
      <PageHeader></PageHeader>
      <LateralMenu></LateralMenu>
    </StyleedDivMain>
  );
}

export default App;
