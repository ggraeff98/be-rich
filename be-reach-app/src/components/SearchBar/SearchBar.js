import React from 'react';
import styled from 'styled-components';
import { NORMAL_GREY } from '../../constants/styleConstants.js';
import magnifyingGlass from '../../assets/svgs/magnifying-glass.svg';

const StyledSearchInputContainer = styled.div`
  width: 100%;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSeacrhInput = styled.input`
  height: 24px;
  font-size: 16px;
  padding: 2px 5px;
  font-family: 'Ubuntu';
  border-radius: 5px;
  outline: none;
  border-style: none;
  border: 1px solid ${NORMAL_GREY};
  width: 100%;
  margin-right: 5px;
`;

const searchBar = () => {
  return (
    <StyledSearchInputContainer>
      <StyledSeacrhInput></StyledSeacrhInput>
      <img src={magnifyingGlass} alt="magnifying-glass"></img>
    </StyledSearchInputContainer>
  );
};

export default searchBar;
