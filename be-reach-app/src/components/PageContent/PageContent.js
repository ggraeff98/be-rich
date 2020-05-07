import React from 'react';
import styled from 'styled-components';

const StyledPageContentContainer = styled.div`
  padding: 0 10px;
`;

const pageContent = () => {
  return (
    <StyledPageContentContainer>
      <div>Content here</div>
    </StyledPageContentContainer>
  );
};

export default pageContent;
