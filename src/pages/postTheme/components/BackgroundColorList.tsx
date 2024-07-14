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

  // Tailwind CSS 클래스 이름을 value에 따라 동적으로 생성하는 함수
  const getColorClass = (color: string) => {
    switch (color) {
      case BackgroundColor.Beige:
        return "bg-beige";
      case BackgroundColor.Purple:
        return "bg-purple-200";
      case BackgroundColor.Blue:
        return "bg-blue-200";
      case BackgroundColor.Green:
        return "bg-green-200";
      default:
        return "";
    }
  };

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
          {selectedOption === color && (
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
