import React, { useContext } from 'react';
import styled from 'styled-components';
import linearGraph from '../../assets/svgs/linear-graphic.svg';
import variableGraph from '../../assets/svgs/variable-graphic.svg';
import closeIcon from '../../assets/svgs/close.svg';
import { LIGHT_GOLDEN } from '../../constants/styleConstants';
import { IPAD_PRO } from '../../constants/breakPointConstants';
import HeaderItems from './HeaderItems/HeaderItems';
import { LateralMenuContext } from '../../contexts/lateral-menu-context';

const fixedIncomes = [
  { name: 'O que é?' },
  { name: 'Títulos Públicos' },
  { name: 'CDBs' },
  { name: 'CRAs' },
  { name: 'CRISs' },
  { name: 'LCAs' },
  { name: 'LCIs' }
];

const variableIncomes = [
  { name: 'O que é?' },
  { name: 'Ações' },
  { name: 'Fundos Imobiliários' },
  { name: 'Opções' }
];

const StyledToggleMenuIcons = styled.img`
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledHeader = styled.header`
  background-color: ${LIGHT_GOLDEN};

  @media (max-width: ${IPAD_PRO + 1}px) {
    padding: 0px;
    height: 100vh;
  }
`;

const headerItems = [
  {
    imagePath: linearGraph,
    label: 'Renda Fixa',
    alt: 'renda-fixa',
    relatedIncomes: fixedIncomes,
    selected: false
  },
  {
    imagePath: variableGraph,
    label: 'Renda Variável',
    alt: 'renda-variável',
    relatedIncomes: variableIncomes,
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
