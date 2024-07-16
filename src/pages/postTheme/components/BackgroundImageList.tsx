import * as React from "react";
import { useState, useEffect } from "react";
import { BackgroundImageListProps } from "../constants/propTypes";
import useUpdateThemeData from "../hooks/useUpdateThemeData";
import IcCheckTheme from "../assets/icons/ic_check_theme.png";

export const BackgroundImageList: React.FC<BackgroundImageListProps> = ({
  handleOptionClick,
  setThemeData,
  selectedImageUrl,
  setSelectedImageUrl,
}) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const updateThemeData = useUpdateThemeData(setThemeData);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const backgroundImageUrl =
          "https://rolling-api.vercel.app/background-images/";
        const response = await fetch(backgroundImageUrl);
        const data = await response.json();

        if (data && data.imageUrls && data.imageUrls.length > 0) {
          setImageUrls(data.imageUrls);
          // 첫 번째 이미지 URL 선택
          setSelectedImageUrl(data.imageUrls[0]);
        }
      } catch (error) {
        console.error("backgroundImageUrl 패치 실패:", error);
      }
    };

    fetchImageUrls();
  }, []);

  // selectedImageUrl이 변경될 때마다 themeData 업데이트
  useEffect(() => {
    if (selectedImageUrl) {
      updateThemeData("backgroundImageURL", selectedImageUrl);
    }
  }, [selectedImageUrl, setThemeData]);

  // 이미지 선택 처리
  const handleImageSelect = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    handleOptionClick("backgroundImageURL", imageUrl);
  };

  return (
    <div>
      <ul className="flex gap-x-4">
        {imageUrls.map((imageUrl, index) => (
          <li key={index} className="relative">
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              name="backgroundImageURL"
              value={imageUrl}
              checked={selectedImageUrl === imageUrl}
              onChange={() => handleImageSelect(imageUrl)}
              className="hidden"
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="block w-[168px] h-[168px] rounded-2xl cursor-pointer relative"
            >
              <img
                src={imageUrl}
                alt={`background ${index}`}
                className="absolute top-0 w-full h-full rounded-2xl"
              />
              {selectedImageUrl === imageUrl && (
                <img
                  src={IcCheckTheme}
                  alt="배경화면 선택 아이콘"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
                />
              )}
            </label>
          </li>
        ))}
      </ul>
      {uploadError && <p className="text-red-500 mt-5">{uploadError}</p>}
    </div>
  );
};
