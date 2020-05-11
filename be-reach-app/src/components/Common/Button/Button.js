import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  border-radius: 15px;
  background-color: #ecd08b;
  padding: 5px 20px;
  font-size: 12pt;
  font-weight: bold;
  border: none;
  line-height: 21px;
`;

const Button = (props) => {
  return <StyledButton onClick={props.clicked}>{props.label}</StyledButton>;
};

export default Button;
