import React, { useContext } from 'react';
import styled from 'styled-components';
import { NORMAL_WHITE } from '../../../constants/styleConstants';
import { IPAD_PRO } from '../../../constants/breakPointConstants';
import { LateralMenuContext } from '../../../contexts/lateral-menu-context';

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;

  @media (max-width: ${IPAD_PRO + 1}px) {
    display: block;
    height: unset;
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

  @media (max-width: ${IPAD_PRO + 1}px) {
    border-top: 1px solid ${NORMAL_WHITE};
    padding: 5px 10px;
    height: unset;
  }

  @media (min-width: ${IPAD_PRO + 1}px) {
    &:hover {
      background: rgba(149, 116, 136, 0.2);
      font-weight: bold;
      border-bottom: 5px solid rgb(113, 145, 76);
    }
  }

  &:hover {
    cursor: pointer;
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

const HeaderItem = (props) => {
  const lateralMenuContext = useContext(LateralMenuContext);

  const itemClicked = () => {
    lateralMenuContext.onToggleLateralMenu();
  };

  const headerItems = props.menuOptions.map((option) => {
    return (
      <StyleedLi onClick={itemClicked} key={option.label}>
        <div>
          <img src={option.imagePath} alt={option.alt}></img>
          {option.label}
        </div>
      </StyleedLi>
    );
  });

  return <StyledUl>{headerItems}</StyledUl>;
};

export default HeaderItem;
