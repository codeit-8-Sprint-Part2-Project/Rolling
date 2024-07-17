import { useState, useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import useUpdateThemeData from "../hooks/useUpdateThemeData";

const useSelectedTheme = (
  setThemeData: React.Dispatch<React.SetStateAction<any>>
) => {
  const [selectedColor, setSelectedColor] = useState<string>("beige");
  const [isThemeType, setIsThemeType] = useState(true);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const { themeData } = useThemeContext();
  const updateThemeData = useUpdateThemeData(setThemeData);

  useEffect(() => {
    if (isThemeType) {
      setSelectedImageUrl(null);
    } else {
      setSelectedColor("beige");
    }
  }, [isThemeType]);

  useEffect(() => {
    if (selectedImageUrl === null) {
      updateThemeData("backgroundImageURL", null);
    }
  }, [selectedImageUrl]);

  const handleOptionClick = (optionType: string, value: string) => {
    if (optionType === "backgroundColor") {
      setSelectedColor(value);
      updateThemeData("backgroundColor", value);
    } else if (optionType === "backgroundImageUrl") {
      setSelectedImageUrl(value);
      updateThemeData("backgroundImageURL", value);
    }
  };

  return {
    selectedColor,
    isThemeType,
    selectedImageUrl,
    themeData,
    setIsThemeType,
    setSelectedColor,
    setSelectedImageUrl,
    handleOptionClick,
  };
};

export default useSelectedTheme;
