import * as React from "react";
import { createContext, useState, ReactNode, ChangeEvent } from "react";
import { ThemeContextProps } from "../constants/propTypes";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeData, setThemeData] = useState<any>({
    team: "8-1",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // 입력 필드의 값을 상태에 업데이트
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setThemeData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 특정 옵션을 선택할 때 상태 업데이트
  const handleOptionClick = (optionType: string, value: string) => {
    setThemeData((prevData: any) => ({
      ...prevData,
      [optionType]: value,
    }));
  };

  const handleButtonClick = () => {};

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
        fetchThemeData: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
