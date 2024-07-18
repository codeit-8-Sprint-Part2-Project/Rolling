import { useContext } from "react";
import { ThemeContext } from "../api/ThemeProvider";
import { ThemeContextProps } from "../constants/propTypes";

export function useThemeContext(): ThemeContextProps {
  const contextValue = useContext<ThemeContextProps | undefined>(ThemeContext);

  if (!contextValue) {
    throw new Error("ThemeProvider 범위 내에서 사용해주세요.");
  }

  return contextValue;
}
