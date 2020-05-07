import React from 'react';
import styled from 'styled-components';
import { NORMAL_GREY } from '../../constants/styleConstants.js';

const StyledSearchInputContainer = styled.div`
  width: 100%;
  margin-right: 10px;
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
`;

const searchBar = () => {
  return (
    <StyledSearchInputContainer>
      <StyledSeacrhInput></StyledSeacrhInput>
    </StyledSearchInputContainer>
  );
};

export default searchBar;
