import { useEffect, useState } from "react";
import { StoreApi, UseBoundStore } from "zustand";

export function useStoreSelector<T, U>(
  store: UseBoundStore<StoreApi<T>>,
  selector: (state: T) => U
): U {
  const value = store(selector);
  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);
  }, [value]);

  return state;
}
