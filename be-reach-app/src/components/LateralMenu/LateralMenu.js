import React, { useState } from 'react';
import closeIcon from '../../assets/svgs/close.svg';
import hamburguerIcon from '../../assets/svgs/hamburguer-menu.svg';
import { IPAD_PRO } from '../../constants/breakPointConstants';

const LateralMenu = (props) => {
  const [lateralMenuState, setLateralMenuState] = useState({
    isOpen: false
  });

  const onChangeMenuLateralState = (show) => {
    setLateralMenuState({
      isOpen: show
    });
  };

  const lateralMenuIcon = lateralMenuState.isOpen ? (
    <img
      src={closeIcon}
      alt="close-menu"
      onClick={() => onChangeMenuLateralState(false)}
    ></img>
  ) : (
    <img
      src={hamburguerIcon}
      alt="lateral-menu"
      onClick={() => onChangeMenuLateralState(true)}
    ></img>
  );

  return (
    <div>
      {window.innerWidth <= IPAD_PRO + 1 ? (
        <div>
          {lateralMenuIcon}
          {props.children}
        </div>
      ) : null}
    </div>
  );
};

export default LateralMenu;
