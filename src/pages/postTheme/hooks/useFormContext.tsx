import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../core/ThemeProvider";

export function useFormContext<T>(context: React.Context<T | undefined>) {
  const contextValue = useContext(context);

  if (!contextValue) {
    throw new Error("useFormContext must be used within a ThemeProvider");
  }

  return contextValue as T;
}
