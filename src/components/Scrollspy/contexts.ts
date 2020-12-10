import { createContext } from 'react';

import { ItemState } from '../Item';

export interface IScrollspyContext {
  registerItem: (item: ItemState) => void;
}

export const ScrollspyContext = createContext({} as IScrollspyContext);