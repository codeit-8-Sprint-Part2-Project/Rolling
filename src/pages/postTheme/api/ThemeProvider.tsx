import * as React from "react";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  ChangeEvent,
} from "react";
import { getRecipients } from "./themeApi";

//interface
export interface ThemeData {
  id: string;
  team: string;
  name: string;
  backgroundColor: string;
  backgroundImageURL?: string | null;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextProps {
  themeData: ThemeData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOptionClick: (optionType: string, value: string) => void;
  fetchThemeData: (team: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

//ThemeProvider component
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeData, setThemeData] = useState<ThemeData>({
    id: "",
    team: "",
    name: "",
    backgroundColor: "purple",
    backgroundImageURL: null,
  });

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

  const fetchThemeData = async (team: string) => {
    try {
      const data = await getRecipients({ team: themeData.team, limit: 1 });
      if (data.results.length > 0) {
        const recipient = data.results[0];
        setThemeData({
          id: recipient.id,
          team: recipient.team,
          name: recipient.name,
          backgroundColor: recipient.backgroundColor,
          backgroundImageURL: recipient.backgroundImageURL,
        });
        console.log("API 데이터 호출 성공:", recipient);
      }
    } catch (error) {
      console.error("API 데이터 호출 실패:", error);
    }
  };

  useEffect(() => {
    if (themeData.team) {
      fetchThemeData(themeData.team);
    }
  }, [themeData.team]);

  return (
    <ThemeContext.Provider
      value={{ themeData, handleChange, handleOptionClick, fetchThemeData }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
