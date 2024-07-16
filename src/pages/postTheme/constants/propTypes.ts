import { ReactNode } from "react";
import { ThemeContextProps } from "../api/ThemeProvider";

export interface FormProps {
  children: ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  themeData: ThemeContextProps["themeData"];
  setThemeData: React.Dispatch<
    React.SetStateAction<ThemeContextProps["themeData"]>
  >;
  isButtonDisabled: boolean;
  handleButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ThemeSelectionProps {
  setIsButtonDisabled: (disabled: boolean) => void;
  setThemeData: React.Dispatch<React.SetStateAction<any>>;
}

export interface BackgroundImageListProps {
  handleOptionClick: (optionType: string, value: string) => void;
  themeData: any;
  setThemeData: React.Dispatch<React.SetStateAction<any>>;
  isThemeType?: boolean;
  selectedImageUrl: string | null;
  setSelectedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface BackgroundColorListProps {
  selectedColor: string;
  handleOptionClick: (optionType: string, value: string) => void;
}

export interface ReceiverInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  themeData: ThemeContextProps["themeData"];
}
