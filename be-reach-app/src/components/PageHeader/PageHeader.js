import React, { useContext } from 'react';
import styled from 'styled-components';
import linearGraph from '../../assets/svgs/linear-graphic.svg';
import variableGraph from '../../assets/svgs/variable-graphic.svg';
import closeIcon from '../../assets/svgs/close.svg';
import { SO_LIGHT_GOLDEN } from '../../constants/styleConstants';
import { IPAD_PRO } from '../../constants/breakPointConstants';
import HeaderItems from './HeaderItems/HeaderItems';
import { LateralMenuContext } from '../../contexts/lateral-menu-context';
import money from '../../assets/images/money-bag.png';

const fixedIncomesLinks = [
  { name: 'O que é?', path: 'renda-fixa' },
  { name: 'Títulos Públicos', path: 'renda-fixa-titulos-publicos' },
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

const StyledToggleMenuIcons = styled.img`
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledHeader = styled.header`
  background-color: ${SO_LIGHT_GOLDEN};
  width: 100%;

  @media (max-width: ${IPAD_PRO + 1}px) {
    padding: 0px;
    min-height: 100vh;
  }
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
  const lateralMenuContext = useContext(LateralMenuContext);

  const onChangeMenuLateralState = () => {
    lateralMenuContext.onToggleLateralMenu();
  };

  const closeLateralMenuIcon = (
    <StyledToggleMenuIcons
      src={closeIcon}
      alt="close-menu"
      onClick={() => onChangeMenuLateralState()}
    ></StyledToggleMenuIcons>
  );

  return (
    <StyledHeader>
      {window.innerWidth <= IPAD_PRO + 1 ? closeLateralMenuIcon : null}
      <HeaderItems menuOptions={headerItems}></HeaderItems>
    </StyledHeader>
  );
};

export default PageHeader;
