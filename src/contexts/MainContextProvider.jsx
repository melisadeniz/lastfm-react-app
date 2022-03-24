import React, { createContext } from "react";
export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  return <MainContext.Provider>{children}</MainContext.Provider>;
}
