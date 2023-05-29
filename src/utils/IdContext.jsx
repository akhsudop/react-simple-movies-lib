import { createContext, useContext } from "react";

export const IdContext = createContext();

export const useId = () => useContext(IdContext);
