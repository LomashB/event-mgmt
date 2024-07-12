// src/contexts/MenuContext.js

import React, { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  return (
    <MenuContext.Provider value={{ isMenuVisible, toggleMenuVisibility }}>
      {children}
    </MenuContext.Provider>
  );
};
