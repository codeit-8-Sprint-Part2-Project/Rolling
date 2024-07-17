import * as React from "react";
import { useState, useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { getColorClass } from "../utils/getColorClass";
import { BackgroundColor } from "../constants/enum";
import { BackgroundColorListProps } from "../constants/propTypes";
import ThemeCheckIc from "../UI/ThemeCheckIc";

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
    <ul className="flex gap-x-4 max-md:grid max-md:grid-cols-2 max-md:gap-y-4 max-md:mb-16 max-[1248px]:mb-60">
      {backgroundColors.map((color, index) => (
        <li
          key={`${color}-${index}`}
          className="relative flex-1 max-md:aspect-w-1 max-md:aspect-h-1"
        >
          <input
            name="backgroundColor"
            type="button"
            value={color}
            onClick={() => handleOptionClick("backgroundColor", color)}
            className={`relative w-full h-[168px] rounded-2xl outline outline-1 outline-gray-300 text-transparent cursor-pointer ${getColorClass(
              color
            )}`}
          />
          {selectedColor === color && (
            <div className="absolute top-0 w-full h-full rounded-2xl">
              <ThemeCheckIc />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
