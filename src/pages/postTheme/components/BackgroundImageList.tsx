import * as React from "react";
import { useState, useEffect } from "react";

interface BackgroundImageListProps {
  selectedOption: string;
  handleOptionClick: (optionType: string, value: string) => void;
  themeData: any;
  setThemeData: React.Dispatch<React.SetStateAction<any>>;
  isThemeType?: boolean;
  selectedImageUrl: string | null;
  setSelectedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

export const BackgroundImageList: React.FC<BackgroundImageListProps> = ({
  selectedOption,
  handleOptionClick,
  themeData,
  setThemeData,
  isThemeType,
  selectedImageUrl,
  setSelectedImageUrl,
}) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // selectedImageUrl이 변경될 때 themeData 업데이트
  useEffect(() => {
    if (selectedImageUrl) {
      setThemeData((prevThemeData: any) => ({
        ...prevThemeData,
        backgroundImageURL: selectedImageUrl,
      }));
    }
  }, [selectedImageUrl, setThemeData]);

  // 이미지 업로드 갯수 4개로 제한
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (imageUrls.length >= 4) {
      setUploadError("이미지는 최대 4개까지만 업로드할 수 있습니다.");
      return;
    }

    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImageUrls((prevImages) => [
            ...prevImages,
            reader.result as string,
          ]);
          setUploadError(null);
        }
      };
      reader.onerror = () => {
        setUploadError("이미지 업로드 중 오류가 발생했습니다.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    handleOptionClick("backgroundImageURL", imageUrl);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
      <ul>
        {imageUrls.map((imageUrl, index) => (
          <li key={index} style={{ listStyleType: "none", margin: "10px 0" }}>
            <label>
              <input
                type="radio"
                name="backgroundImageURL"
                value={imageUrl}
                checked={selectedImageUrl === imageUrl}
                onChange={() => handleImageSelect(imageUrl)}
              />
              <img
                src={imageUrl}
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
