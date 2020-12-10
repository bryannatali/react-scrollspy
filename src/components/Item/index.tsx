import React, {
  useContext,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

import { ScrollspyContext } from "../Scrollspy/contexts";

export interface ItemState {
  id: number | string;
  ref: React.MutableRefObject<HTMLDivElement>;
}

type Props = Omit<ItemState, "ref">;

const Item: React.ForwardRefRenderFunction<{}, Props> = ({ id }, itemRef) => {
  const { registerItem } = useContext(ScrollspyContext);

  useImperativeHandle<{}, {}>(itemRef, () => ({}));

  useEffect(() => {
    registerItem({ id, ref: {} as React.MutableRefObject<HTMLDivElement> });
  }, [registerItem]);

  return <div />;
};

export default forwardRef(Item);
