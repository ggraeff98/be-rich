import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { IPAD_PRO } from '../../../constants/breakPointConstants';
import { NORMAL_WHITE } from '../../../constants/styleConstants';
import { LateralMenuContext } from '../../../contexts/lateral-menu-context';

const StyledDivContainer = styled.div`
  height: 100%;
`;

const StyledUlContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 60px;

  @media (max-width: ${IPAD_PRO + 1}px) {
    display: block;
    height: unset;
  }

  &:last-child {
    border-bottom: 1px solid ${NORMAL_WHITE};
  }
`;

const StyleedLi = styled.li`
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
    display: block;
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
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

const StyledRelatedItemsContainer = styled.div`
  color: ${NORMAL_WHITE};
  overflow: hidden;
  height: ${(props) => (props.active ? `${props.itemsAmount * 26}px` : '0px')};
  transition: height 0.5s ease-out;
`;

const StyledRelatedItemsUl = styled.ul`
  padding: 0;
  list-style: none;
  font-weight: normal;
`;

const StyledRelatedItemsLi = styled.li`
  padding: 0px 0px 5px 45px;
`;

const HeaderItem = (props) => {
  const lateralMenuContext = useContext(LateralMenuContext);

  const [selectedItemState, setSelectedItemState] = useState({
    index: null
  });

  const onSelectItemHandler = (index) => {
    if (window.innerWidth > IPAD_PRO + 1) return;
    index === selectedItemState.index
      ? setSelectedItemState({ index: null })
      : setSelectedItemState({ index });
  };

  const itemClicked = (e) => {
    lateralMenuContext.onToggleLateralMenu();
  };

  const headerItems = props.menuOptions.map((option, i) => {
    return (
      <StyledDivContainer key={option.label}>
        <StyleedLi
          onClick={() => onSelectItemHandler(i)}
          selected={selectedItemState.index === i}
        >
          <div>
            <img src={option.imagePath} alt={option.alt}></img>
            {option.label}
          </div>
        </StyleedLi>
        <StyledRelatedItemsContainer
          active={selectedItemState.index === i}
          itemsAmount={option.relatedIncomes.length}
        >
          <StyledRelatedItemsUl>
            {option.relatedIncomes &&
              option.relatedIncomes.map((item) => {
                return (
                  <StyledRelatedItemsLi onClick={itemClicked} key={item.name}>
                    {item.name}
                  </StyledRelatedItemsLi>
                );
              })}
          </StyledRelatedItemsUl>
        </StyledRelatedItemsContainer>
      </StyledDivContainer>
    );
  });

  return <StyledUlContainer>{headerItems}</StyledUlContainer>;
};

export default HeaderItem;
