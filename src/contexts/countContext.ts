import { createContext } from "react";

type countContextType = {
  ctx: number;
  setCtx: (n: number) => void;
};

export const countContext = createContext<countContextType | null>(null);
