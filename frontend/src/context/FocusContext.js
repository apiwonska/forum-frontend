import { createContext } from 'react';

export const defaultObject = {
  focusOnLayoutWrapper: () => {},
};

export const FocusContext = createContext(defaultObject);
