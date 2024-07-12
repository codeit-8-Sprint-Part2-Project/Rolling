import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "../core/ThemeProvider"; // 적절한 경로로 수정하세요

interface BackgroundColorListProps {
  selectedOption: string;
  handleOptionClick: (optionType: string, value: string) => void;
}

export const BackgroundColorList: React.FC<BackgroundColorListProps> = ({
  selectedOption,
  handleOptionClick,
}) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null; // 컨텍스트가 정의되지 않은 경우, null을 반환
  }

  const { themeData } = themeContext;
  const colors = themeData.backgroundColor;

  return (
    <ul>
      {colors.map((color) => (
        <li
          key={color}
          onClick={() => handleOptionClick("backgroundColor", color)}
          style={{
            backgroundColor:
              selectedOption === color ? "lightgray" : "transparent",
            cursor: "pointer",
          }}
        >
          {color}
        </li>
      ))}
    </ul>
  );
};
