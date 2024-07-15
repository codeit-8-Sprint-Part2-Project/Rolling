import * as React from "react";
import { useState, useEffect } from "react";

interface BackgroundImageListProps {
  handleOptionClick: (optionType: string, value: string) => void;
  themeData: any;
  setThemeData: React.Dispatch<React.SetStateAction<any>>;
  isThemeType?: boolean;
  selectedImageUrl: string | null;
  setSelectedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

export const BackgroundImageList: React.FC<BackgroundImageListProps> = ({
  handleOptionClick,
  setThemeData,
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
    if (imageUrls.length >= 3) {
      setUploadError("이미지는 최대 3개까지만 업로드할 수 있습니다.");
      return;
    }

    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
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

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    handleOptionClick("backgroundImageURL", imageUrl);
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
              src="../assets/icons/ic_plus_darkGray.png"
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
              {selectedImageUrl === imageUrl && (
                <img
                  src="../assets/icons/ic_check_theme.png"
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
