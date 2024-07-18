import * as React from "react";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  ChangeEvent,
} from "react";
import { ThemeContextProps } from "../constants/propTypes";
import useGetThemeData from "../hooks/useGetThemeData";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { themeData, fetchThemeData, isLoading, error, setThemeData } =
    useGetThemeData("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setThemeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionClick = (optionType: string, value: string) => {
    setThemeData((prevData) => ({
      ...prevData,
      [optionType]: value,
    }));
  };

  useEffect(() => {
    if (themeData.team) {
      fetchThemeData(themeData.team);
    }
  }, [themeData.team, fetchThemeData]);

  const handleButtonClick = () => {
    console.log("Button clicked with themeData:", themeData);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeData,
        handleChange,
        handleOptionClick,
        fetchThemeData,
        isButtonDisabled,
        setIsButtonDisabled,
        handleButtonClick,
        setThemeData,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
