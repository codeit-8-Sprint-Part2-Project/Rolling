import * as React from "react";
import { createContext, useState, ReactNode, ChangeEvent } from "react";
import { ThemeContextProps } from "../constants/propTypes";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeData, setThemeData] = useState<any>({
    team: "", // 초기값 설정
    // 다른 초기값들 설정
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setThemeData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionClick = (optionType: string, value: string) => {
    setThemeData((prevData: any) => ({
      ...prevData,
      [optionType]: value,
    }));
  };

  const handleButtonClick = () => {
    console.log("Button clicked with themeData:", themeData);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeData,
        handleChange,
        handleOptionClick,
        isButtonDisabled,
        setIsButtonDisabled,
        handleButtonClick,
        setThemeData,
        fetchThemeData: () => {}, // 빈 함수로 정의
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
