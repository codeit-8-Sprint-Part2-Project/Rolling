import * as React from "react";
import { useState, useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { getColorClass } from "../utils/getColorClass";
import { BackgroundColor } from "../constants/enum";

interface BackgroundColorListProps {
  selectedColor: string;
  handleOptionClick: (optionType: string, value: string) => void;
}

export const BackgroundColorList: React.FC<BackgroundColorListProps> = ({
  selectedColor,
  handleOptionClick,
}) => {
  const themeContext = useThemeContext();
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]);

  const backgroundColorArray = Object.values(BackgroundColor);

  useEffect(() => {
    setBackgroundColors(backgroundColorArray);
    if (backgroundColorArray.length > 0 && !selectedColor) {
      handleOptionClick("backgroundColor", backgroundColorArray[0]);
    }
  }, [selectedColor, handleOptionClick]);

  if (!themeContext) {
    return null;
  }

  return (
    <menu className="flex gap-x-4">
      {backgroundColors.map((color, index) => (
        <div key={`${color}-${index}`} className="relative flex-1">
          <input
            name="backgroundColor"
            type="button"
            value={color}
            onClick={() => handleOptionClick("backgroundColor", color)}
            className={`w-full h-[168px] rounded-2xl outline outline-1 outline-gray-300 text-transparent cursor-pointer ${getColorClass(
              color
            )}`}
          />
          {selectedColor === color && (
            <img
              src="../assets/icons/ic_check_theme.png"
              alt="배경화면 선택 아이콘"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          )}
        </div>
      ))}
    </menu>
  );
};
