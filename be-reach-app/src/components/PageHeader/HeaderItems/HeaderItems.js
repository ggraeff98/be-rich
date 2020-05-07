import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { IPAD_PRO } from '../../../constants/breakPointConstants';
import { NORMAL_WHITE } from '../../../constants/styleConstants';
import { LateralMenuContext } from '../../../contexts/lateral-menu-context';
import { NavLink, withRouter } from 'react-router-dom';

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
  height: ${(props) => (props.active ? `${props.itemsAmount * 31}px` : '0px')};
  transition: height 0.5s ease-out;
`;

const StyledRelatedItemsUl = styled.ul`
  padding: 0;
  list-style: none;
  font-weight: normal;
`;

const StyledRelatedItemsLi = styled.li`
  padding: 5px 0;
  margin-left: 45px;
`;

const StyledNavLink = styled(NavLink)`
  color: ${NORMAL_WHITE};
  text-decoration: none;

  &.active {
    border-bottom: 4px solid ${NORMAL_WHITE};
    color: white;
  }
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
    if (index === 0) {
      itemClicked('inicio');
    }
  };

  const itemClicked = (path) => {
    lateralMenuContext.onToggleLateralMenu();
    props.history.push(`/${path}`);
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
        {option.relatedLinks ? (
          <StyledRelatedItemsContainer
            active={selectedItemState.index === i}
            itemsAmount={option.relatedLinks.length}
          >
            <StyledRelatedItemsUl>
              {option.relatedLinks &&
                option.relatedLinks.map((item) => {
                  return (
                    <StyledRelatedItemsLi
                      onClick={() => itemClicked(item.path)}
                      key={item.name}
                    >
                      <StyledNavLink to={`/${item.path}`}>{item.name}</StyledNavLink>
                    </StyledRelatedItemsLi>
                  );
                })}
            </StyledRelatedItemsUl>
          </StyledRelatedItemsContainer>
        ) : null}
      </StyledDivContainer>
    );
  });

  return <StyledUlContainer>{headerItems}</StyledUlContainer>;
};

export default withRouter(HeaderItem);
