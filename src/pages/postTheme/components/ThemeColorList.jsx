import React from "react";

export function ThemeColorList({ selectedOption, handleOptionClick }) {
  const colors = ["Yellow", "Purple", "Blue", "Green"];

  return (
    <ul>
      {colors.map((color) => (
        <li
          key={color}
          onClick={() => handleOptionClick("themeColor", color)}
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
}
