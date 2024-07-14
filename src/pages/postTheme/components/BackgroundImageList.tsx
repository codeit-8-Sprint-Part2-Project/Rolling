import * as React from "react";
import { useState } from "react";

interface BackgroundImageListProps {
  selectedOption: string;
  handleOptionClick: (optionType: string, value: string) => void;
  themeData: any;
  setThemeData: React.Dispatch<React.SetStateAction<any>>;
}

export const BackgroundImageList: React.FC<BackgroundImageListProps> = ({
  selectedOption,
  handleOptionClick,
  themeData,
  setThemeData,
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // 이미지 업로드 갯수 4개로 제한
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length >= 4) {
      setUploadError("이미지는 최대 4개까지만 업로드할 수 있습니다.");
      return;
    }

    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImages((prevImages) => [...prevImages, reader.result as string]);
          setUploadError(null);
        }
      };
      reader.onerror = () => {
        setUploadError("이미지 업로드 중 오류가 발생했습니다.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSelect = (image: string) => {
    handleOptionClick("backgroundImageURL", image);
    setThemeData((prevThemeData: any) => ({
      ...prevThemeData,
      backgroundImageURL: image,
    }));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
      <ul>
        {images.map((image, index) => (
          <li key={index} style={{ listStyleType: "none", margin: "10px 0" }}>
            <label>
              <input
                type="radio"
                name="backgroundImageURL"
                value={image}
                checked={selectedOption === image}
                onChange={() => handleImageSelect(image)}
              />
              <img
                src={image}
                alt={`background ${index}`}
                style={{ width: "100px", height: "100px", marginLeft: "10px" }}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
