import React from 'react';
import styled from 'styled-components';
import { NORMAL_WHITE } from '../../../constants/styleConstants';
import { IPHONE_8_PLUS_PORTRAIT } from '../../../constants/breakPointConstants';

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;

  @media (max-width: ${IPHONE_8_PLUS_PORTRAIT}) {
    display: block;
  }
`;

const StyleedLi = styled.li`
  font-family: 'Ubuntu';
  color: ${NORMAL_WHITE};
  padding: 0 10px;
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: ${IPHONE_8_PLUS_PORTRAIT}) {
    padding: 5px 10px;
  }

  @media (min-width: ${IPHONE_8_PLUS_PORTRAIT}) {
    &:hover {
      cursor: pointer;
      background: rgba(149, 116, 136, 0.2);
      font-weight: bold;
      border-bottom: 5px solid rgb(113, 145, 76);
    }
  }

  div {
    display: flex;
    align-items: flex-end;
    img {
      width: 30px;
      height: 35px;
      padding-right: 5px;
    }
  }
`;

const headerItem = (props) => {
  const headerItems = props.menuOptions.map((option) => {
    return (
      <StyleedLi>
        <div>
          <img src={option.imagePath} alt={option.alt}></img>
          {option.label}
        </div>
      </StyleedLi>
    );
  });

  return <StyledUl>{headerItems}</StyledUl>;
};

export default headerItem;