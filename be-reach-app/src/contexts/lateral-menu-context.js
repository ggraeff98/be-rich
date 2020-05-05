import React, { useState } from 'react';

export const LateralMenuContext = React.createContext({
  isOpen: false,
  isOpenHandler: () => {}
});

const LateralMenuProvider = (props) => {
  const [menuState, setIsOpenState] = useState({
    isOpen: false
  });

  const isOpenHandler = () => {
    setIsOpenState({
      isOpen: !menuState.isOpen
    });
  };
  return (
    <LateralMenuContext.Provider
      value={{
        onToggleLateralMenu: isOpenHandler,
        lateralMenuState: menuState.isOpen
      }}
    >
      {props.children}
    </LateralMenuContext.Provider>
  );
};

export default LateralMenuProvider;
