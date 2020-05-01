import React from 'react';
import styled from 'styled-components';
import linearGraph from '../../assets/svgs/linear-graphic.svg';
import variableGraph from '../../assets/svgs/variable-graphic.svg';
import { LIGHT_GOLDEN } from '../../constants/styleConstants';
import { IPAD_PRO } from '../../constants/breakPointConstants';
import HeaderItems from './HeaderItems/HeaderItems';

const StyledHeader = styled.header`
  height: 60px;
  background-color: ${LIGHT_GOLDEN};

  @media (max-width: ${IPAD_PRO}) {
    height: 100%;
    padding: 5px 10px;
  }
`;

const headerItems = [
  {
    imagePath: linearGraph,
    label: 'Renda Fixa',
    alt: 'renda-fixa',
  },
  {
    imagePath: variableGraph,
    label: 'Renda Variável',
    alt: 'renda-variável',
  },
];

const pageHeader = (props) => {
  return (
    <StyledHeader>
      <HeaderItems menuOptions={headerItems}></HeaderItems>
    </StyledHeader>
  );
};

export default pageHeader;
