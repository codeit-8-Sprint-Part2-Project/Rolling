import * as React from "react";
import { useState, useEffect } from "react";
import { useFormContext } from "../hooks/useFormContext";
import { ThemeContext, ThemeContextProps } from "../core/ThemeProvider";

// enum 정의
enum BackgroundColor {
  Purple = "purple",
  Beige = "beige",
  Blue = "blue",
  Green = "green",
}

interface BackgroundColorListProps {
  selectedOption: string;
  handleOptionClick: (optionType: string, value: string) => void;
}

export const BackgroundColorList: React.FC<BackgroundColorListProps> = ({
  selectedOption,
  handleOptionClick,
}) => {
  const themeContext = useFormContext<ThemeContextProps>(ThemeContext);
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]);

  // Enum 값을 배열로 변환
  const backgroundColorArray = Object.values(BackgroundColor);

  useEffect(() => {
    setBackgroundColors(backgroundColorArray);
  }, []);

  if (!themeContext) {
    return null;
  }

  return (
    <ul>
      {backgroundColors.map((color, index) => (
        <input
          name="backgroundColor"
          type="button"
          value={color}
          key={`${color}-${index}`}
          onClick={() => handleOptionClick("backgroundColor", color)}
          style={{
            backgroundColor:
              selectedOption === color ? "lightgray" : "transparent",
            cursor: "pointer",
          }}
        />
      ))}
    </ul>
  );
};
