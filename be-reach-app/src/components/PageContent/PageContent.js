import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import AboutFixedIncomes from '../FixedIncomes/About/About';
import PublicTitles from '../FixedIncomes/PublicTitles/PublicTitles';
import CDB from '../FixedIncomes/CDB/CDB';
import CRA from '../FixedIncomes/CRA/CRA';
import CRI from '../FixedIncomes/CRI/CRI';
import LCA from '../FixedIncomes/LCA/LCA';
import LCI from '../FixedIncomes/LCI/LCI';

const StyledPageContentContainer = styled.div`
  padding: 0 10px;
  margin-top: 45px;
  width: 100%;
  min-height: calc(100vh - 45px);
`;

const pageContent = () => {
  return (
    <StyledPageContentContainer>
      <Switch>
        <Route path="/inicio" component={Home}></Route>
        <Route path="/renda-fixa" component={AboutFixedIncomes}></Route>
        <Route path="/renda-fixa-titulos-publicos" component={PublicTitles}></Route>
        <Route path="/renda-fixa-cdb" component={CDB}></Route>
        <Route path="/renda-fixa-cra" component={CRA}></Route>
        <Route path="/renda-fixa-cri" component={CRI}></Route>
        <Route path="/renda-fixa-lca" component={LCA}></Route>
        <Route path="/renda-fixa-lci" component={LCI}></Route>
        <Redirect exact from="/" to="/inicio" />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </StyledPageContentContainer>
  );
};

export default pageContent;
