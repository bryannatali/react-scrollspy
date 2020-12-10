import React, { useState, useCallback } from "react";

import { ScrollspyContext } from "./contexts";

import Items from "../Items";
import Item, { ItemState } from "../Item";

const Scrollspy: React.FC = ({ children }) => {
  const [items, setItems] = useState<ItemState[]>([] as ItemState[]);

  const registerItem = useCallback((item: ItemState) => {
    setItems((oldItems) => [...oldItems, item]);
  }, []);

  return (
    <div className="scrollspy-container">
      <ScrollspyContext.Provider value={{ registerItem }}>
        {children}
      </ScrollspyContext.Provider>
    </div>
  );
};

export default Scrollspy;
