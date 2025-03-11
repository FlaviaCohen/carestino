import { createContext, useReducer, useContext } from "react";

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};
