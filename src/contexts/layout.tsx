import React, { createContext, useContext } from 'react';

export interface LayoutContextType {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

const defaultLayout: LayoutContextType = {
  collapsed: false,
  setCollapsed: () => {},
};

export const LayoutContext = createContext<LayoutContextType>(defaultLayout);

export const useLayout = (): LayoutContextType => {
  return useContext(LayoutContext);
};
