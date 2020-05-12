import React from 'react';
import styled from 'styled-components';
import maisRicoWhiteLogoSmall from '../../assets/images/logo-mais-rico-branco.png';
import money from '../../assets/images/money-bag.png';
import linearGraph from '../../assets/svgs/linear-graphic.svg';
import variableGraph from '../../assets/svgs/variable-graphic.svg';
import { IPAD_PRO } from '../../constants/breakPointConstants';
import { SO_LIGHT_GOLDEN } from '../../constants/styleConstants';
import HeaderItems from './HeaderItems/HeaderItems';

const fixedIncomesLinks = [
  { name: 'O que é?', path: 'renda-fixa' },
  { name: 'Vídeos Relacionados', path: 'renda-fixa-videos' },
  { name: 'CDBs', path: 'renda-fixa-cdb' },
  { name: 'CRAs', path: 'renda-fixa-cra' },
  { name: 'CRISs', path: 'renda-fixa-cri' },
  { name: 'LCAs', path: 'renda-fixa-lca' },
  { name: 'LCIs', path: 'renda-fixa-lci' }
];

const variableIncomesLinks = [
  { name: 'O que é?', path: 'renda-variavel' },
  { name: 'Ações', path: 'renda-variavel-acoes' },
  { name: 'Fundos de Ações', path: 'renda-variavel-fundos-acoes' },
  { name: 'Fundos Imobiliários', path: 'renda-variavel-fundos-imobiliarios' },
  { name: 'Opções', path: 'renda-variavel-opcoes' }
];

const StyledMaisRicoLogo = styled.img`
  height: 70px;
  width: 150px;
`;

const StyledHeader = styled.header`
  background-color: ${SO_LIGHT_GOLDEN};
  width: 100%;

  @media (max-width: ${IPAD_PRO + 1}px) {
    padding: 0px;
    min-height: 100vh;
  }
`;

const StyledLateralMenuHeaderContainer = styled.div`
  display: flex;
  align-items: start;
  padding: 10px 0;
  background-color: #43433f;
`;

const headerItems = [
  { imagePath: money, label: 'Início', alt: 'inicio' },
  {
    imagePath: linearGraph,
    label: 'Renda Fixa',
    alt: 'renda-fixa',
    relatedLinks: fixedIncomesLinks,
    selected: false
  },
  {
    imagePath: variableGraph,
    label: 'Renda Variável',
    alt: 'renda-variável',
    relatedLinks: variableIncomesLinks,
    selected: false
  }
];

const PageHeader = (props) => {
  const maisRicoLogo = (
    <StyledMaisRicoLogo src={maisRicoWhiteLogoSmall} alt="logo"></StyledMaisRicoLogo>
  );

  return (
    <StyledHeader>
      <StyledLateralMenuHeaderContainer>
        {maisRicoLogo}
      </StyledLateralMenuHeaderContainer>
      <HeaderItems menuOptions={headerItems}></HeaderItems>
    </StyledHeader>
  );
};

export default PageHeader;
