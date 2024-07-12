import React from "react";

export function ThemeImageList({ selectedOption, handleOptionClick }) {
  const images = ["Image1", "Image2", "Image3", "Image4"];
  return (
    <ul>
      {images.map((image) => (
        <li
          key={image}
          onClick={() => handleOptionClick("themeImage", image)}
          style={{
            backgroundColor:
              selectedOption === image ? "lightgray" : "transparent",
            cursor: "pointer",
          }}
        >
          {image}
        </li>
      ))}
    </ul>
  );
}
