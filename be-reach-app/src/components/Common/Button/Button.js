import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  border-radius: 15px;
  background-color: ${(props) => (props.background ? props.background : '#ecd08b')};
  padding: 5px 20px;
  font-size: 12pt;
  font-weight: bold;
  border: none;
  line-height: 21px;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const button = (props) => {
  return (
    <StyledButton
      disabled={props.disable}
      background={props.background}
      onClick={props.clicked}
    >
      {props.label}
    </StyledButton>
  );
};

export default button;
