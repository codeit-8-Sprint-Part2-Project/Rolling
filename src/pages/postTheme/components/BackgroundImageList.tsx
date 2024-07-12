import * as React from "react";

interface BackgroundImageListProps {
  selectedOption: string;
  handleOptionClick: (optionType: string, value: string) => void;
}

export const BackgroundImageList: React.FC<BackgroundImageListProps> = ({
  selectedOption,
  handleOptionClick,
}) => {
  const images = ["Image1", "Image2", "Image3", "Image4"];
  return (
    <ul>
      {images.map((image) => (
        <li
          key={image}
          onClick={() => handleOptionClick("backgorundImage", image)}
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
};
