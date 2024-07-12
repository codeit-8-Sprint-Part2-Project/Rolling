import * as React from "react";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  ChangeEvent,
} from "react";
import { getRecipients } from "./themeApi";

export interface ThemeData {
  team: string;
  name: string;
  backgroundColor: string[];
  backgroundImageURL?: string;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextProps {
  themeData: ThemeData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

//ThemeProvider
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeData, setThemeData] = useState<ThemeData>({
    team: "8-1",
    name: "",
    backgroundColor: [],
    backgroundImageURL: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setThemeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchThemeData = async () => {
      try {
        const data = await getRecipients({ team: themeData.team, limit: 1 });
        if (data.results.length > 0) {
          const recipient = data.results[0];
          setThemeData({
            team: recipient.team,
            name: recipient.name,
            backgroundColor: recipient.backgroundColor,
            backgroundImageURL: recipient.backgroundImageURL,
          });
        }
      } catch (error) {
        console.error("API 데이터 호출 실패:", error);
      }
    };

    fetchThemeData();
  }, [themeData.team]);

  return (
    <ThemeContext.Provider value={{ themeData, handleChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
