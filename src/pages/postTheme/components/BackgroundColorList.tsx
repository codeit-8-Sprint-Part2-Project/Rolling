import * as React from "react";
import { useState, useEffect } from "react";
import { useFormContext } from "../hooks/useFormContext";
import { ThemeContext, ThemeContextProps } from "../api/ThemeProvider";

// enum 정의
enum BackgroundColor {
  Beige = "beige",
  Purple = "purple",
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
    // 첫 번째 요소를 기본적으로 선택된 상태로 설정
    if (backgroundColorArray.length > 0 && !selectedOption) {
      handleOptionClick("backgroundColor", backgroundColorArray[0]);
    }
  }, []);

  if (!themeContext) {
    return null;
  }

  return (
    <menu className="flex gap-x-4">
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
          className="flex-1 h-[168px]"
        />
      ))}
    </menu>
  );
};
