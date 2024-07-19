import React, { useEffect, useCallback } from "react";
import { BackgroundImageListProps } from "../constants/propTypes";
import useUpdateThemeData from "../hooks/useUpdateThemeData";
import ThemeCheckIc from "./UI/ThemeCheckIc";
import useGetUrls from "../hooks/useGetUrls";

const BackgroundImageList: React.FC<BackgroundImageListProps> = ({
  handleOptionClick,
  setThemeData,
  selectedImageUrl,
  setSelectedImageUrl,
}) => {
  const { urls: imageUrls, error: fetchError } = useGetUrls(
    "background-images",
    (data) => data.imageUrls || []
  );
  const updateThemeData = useUpdateThemeData(setThemeData);

  // 로드할 때 첫 번째 이미지 URL 선택
  useEffect(() => {
    if (imageUrls.length > 0 && !selectedImageUrl) {
      setSelectedImageUrl(imageUrls[0]);
    }
  }, [imageUrls, selectedImageUrl, setSelectedImageUrl]);

  // selectedImageUrl이 변경될 때마다 themeData 업데이트
  useEffect(() => {
    if (selectedImageUrl) {
      updateThemeData("backgroundImageURL", selectedImageUrl);
    }
  }, [selectedImageUrl, setThemeData, updateThemeData]);

  // 이미지 선택 처리
  const handleImageSelect = useCallback(
    (imageUrl: string) => {
      setSelectedImageUrl(imageUrl);
      handleOptionClick("backgroundImageURL", imageUrl);
    },
    [handleOptionClick, setSelectedImageUrl]
  );

  return (
    <>
      <ul
        className="flex grow gap-x-4 h-[168px] max-md:grid max-md:grid-cols-2 max-md:gap-y-4 max-md:h-full max-md:mb-16
      max-[1248px]:mb-60"
      >
        {imageUrls.map((imageUrl, index) => (
          <li
            key={index}
            className="relative w-full rounded-2xl max-md:grid max-md:aspect-w-1 max-md:aspect-h-1"
          >
            <input
              type="checkbox"
              id={`img-${index}`}
              name="backgroundImageURL"
              value={imageUrl}
              checked={selectedImageUrl === imageUrl}
              onChange={() => handleImageSelect(imageUrl)}
              className="hidden"
            />
            <label htmlFor={`img-${index}`} className="cursor-pointer">
              <img
                src={imageUrl}
                alt={`background ${index}`}
                className="absolute top-0 w-full object-cover rounded-2xl
                max-md: h-full "
              />
              {selectedImageUrl === imageUrl && (
                <div className="relative w-full h-full rounded-2xl bg-white bg-opacity-60">
                  <ThemeCheckIc />
                </div>
              )}
            </label>
          </li>
        ))}
      </ul>
      {fetchError && <p className="text-red-500 mt-5">{fetchError.message}</p>}
    </>
  );
};

export default React.memo(BackgroundImageList);
