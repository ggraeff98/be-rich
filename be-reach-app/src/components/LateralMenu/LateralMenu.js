import React from 'react';
import styled from 'styled-components';
import hamburguerIcon from '../../assets/svgs/hamburguer-menu.svg';
import closeIcon from '../../assets/svgs/close.svg';

const lateralMenu = (props) => {
  return (
    <div>
      <img src={hamburguerIcon} alt="lateral-menu"></img>
      <img src={closeIcon} alt="close-menu"></img>
      {props.children}
    </div>
  );
};

export default lateralMenu;
