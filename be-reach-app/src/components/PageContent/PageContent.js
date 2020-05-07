import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

const StyledPageContentContainer = styled.div`
  padding: 0 10px;
  height: calc(100% - 45px);
  margin-top: 45px;
  width: 100%;
`;

const pageContent = () => {
  return (
    <StyledPageContentContainer>
      <div>Content here</div>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </StyledPageContentContainer>
  );
};

export default pageContent;
