import React, { createContext, useContext } from 'react';

export interface LayoutContextType {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = (): LayoutContextType => {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error('useLayout must be used within a LayoutProvider');
  return ctx;
};
