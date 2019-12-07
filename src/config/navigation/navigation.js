import { createContext, useContext } from 'react';

export const NavContext = createContext();

export function useNav() {
  return useContext(NavContext);
}