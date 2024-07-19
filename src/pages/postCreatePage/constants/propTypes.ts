import { ReactNode, ChangeEvent } from "react";

//context type
export interface ThemeData {
  id: string;
  team: string;
  name: string;
  backgroundColor: string;
  backgroundImageURL?: string | null;
}

//context propTypes
export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextProps {
  themeData: ThemeData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOptionClick: (optionType: string, value: string) => void;
  fetchThemeData: (team: string) => void;
  isButtonDisabled: boolean;
  setIsButtonDisabled: (isDisabled: boolean) => void;
  handleButtonClick: () => void;
  setThemeData: React.Dispatch<React.SetStateAction<ThemeData>>;
}

//theme components propTypes
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

export interface ThemePreviewProps {
  themeData: ThemeData;
}

export interface ThemeTypeSelectionProps {
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
