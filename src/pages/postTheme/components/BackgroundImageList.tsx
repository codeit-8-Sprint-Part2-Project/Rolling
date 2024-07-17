import * as React from "react";
import { useEffect, useCallback } from "react";
import { BackgroundImageListProps } from "../constants/propTypes";
import useUpdateThemeData from "../hooks/useUpdateThemeData";
import ThemeCheckIc from "../UI/ThemeCheckIc";
import useFetchUrls from "../hooks/useFetchUrls";

const BackgroundImageList: React.FC<BackgroundImageListProps> = ({
  handleOptionClick,
  setThemeData,
  selectedImageUrl,
  setSelectedImageUrl,
}) => {
  const { urls: imageUrls, error: fetchError } = useFetchUrls(
    "background-images",
    setSelectedImageUrl
  );
  const updateThemeData = useUpdateThemeData(setThemeData);

  // selectedImageUrl이 변경될 때마다 themeData 업데이트
  useEffect(() => {
    if (selectedImageUrl) {
      updateThemeData("backgroundImageURL", selectedImageUrl);
    }
  }, [selectedImageUrl, setThemeData]);

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
