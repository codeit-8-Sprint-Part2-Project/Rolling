import * as React from "react";
import { useState, useEffect } from "react";
import { BackgroundImageListProps } from "../constants/propTypes";
import useUpdateThemeData from "../hooks/useUpdateThemeData";
import IcPlusDarkGray from "../assets/icons/ic_plus_darkGray.png";
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

  // selectedImageUrl이 변경될 때마다 themeData 업데이트
  useEffect(() => {
    if (selectedImageUrl) {
      updateThemeData("backgroundImageURL", selectedImageUrl);
    }
  }, [selectedImageUrl, setThemeData]);

  // 업로드할 이미지 갯수 3개 제한
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (imageUrls.length >= 3) {
      setUploadError("이미지는 최대 3개까지만 업로드할 수 있습니다.");
      return;
    }

    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 업로드 에러 처리
        if (typeof reader.result === "string") {
          // if (reader.result.length > 300) {
          //   setUploadError(
          //     "이미지 URL이 너무 깁니다. 300자 이하의 이미지를 업로드해주세요."
          //   );
          //   return;
          // }
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

  // 이미지 선택 처리
  const handleImageSelect = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    handleOptionClick("backgroundImageURL", imageUrl);
  };

  // 이미지 삭제 처리
  const handleImageDelete = (imageUrl: string) => {
    setImageUrls((prevImages) => prevImages.filter((url) => url !== imageUrl));
    if (selectedImageUrl === imageUrl) {
      setSelectedImageUrl("");
      updateThemeData("backgroundImageURL", null);
    }
  };

  return (
    <div>
      <ul className="flex gap-x-4">
        <label className="w-[168px] h-[168px] rounded-2xl bg-gray-100 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <div className="relative w-[168px] h-[168px]">
            <img
              src={IcPlusDarkGray}
              alt="배경화면 추가 아이콘"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
            />
          </div>
        </label>
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
              <button
                onClick={() => handleImageDelete(imageUrl)}
                className="absolute top-2 right-2 bg-violet-700 text-sm font-semibold text-white py-0.5 px-2 rounded-full"
              >
                X
              </button>
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
