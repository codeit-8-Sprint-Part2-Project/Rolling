import * as React from "react";
import { useState, useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { BackgroundColorList } from "./BackgroundColorList";
import { BackgroundImageList } from "./BackgroundImageList";
import { ThemeSelectionProps } from "../constants/propTypes";
import useUpdateThemeData from "../hooks/useUpdateThemeData";

const ThemeSelection: React.FC<ThemeSelectionProps> = ({
  setIsButtonDisabled,
  setThemeData,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("beige");
  const [isThemeType, setIsThemeType] = useState(true);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const { themeData } = useThemeContext();
  const updateThemeData = useUpdateThemeData(setThemeData);

  // isThemeType이 변경될 때 selectedImageUrl 업데이트
  useEffect(() => {
    if (isThemeType) {
      setSelectedImageUrl(null);
    } else {
      setSelectedColor("beige");
    }
  }, [isThemeType, selectedImageUrl, setIsButtonDisabled]);

  // selectedImageUrl이 null일 때 themeData 업데이트
  useEffect(() => {
    if (selectedImageUrl === null) {
      updateThemeData("backgroundImageURL", null);
    }
  }, [selectedImageUrl, setThemeData]);

  // 테마 타입의 가시성을 관리하는 이벤트 핸들러, 기본 값은 컬러
  const handleShowColorOptions = () => {
    setIsThemeType(true);
    setIsButtonDisabled(false);
    setSelectedImageUrl(null);
  };

  const handleShowImageOptions = () => {
    setIsThemeType(false);
    setIsButtonDisabled(themeData.backgroundImageURL === null);
    setSelectedColor("beige");
  };

  // 선택된 테마 타입과 옵션을 관리하는 이벤트 핸들러
  const handleOptionClick = (optionType: string, value: string) => {
    if (optionType === "backgroundColor") {
      setSelectedColor(value);
      updateThemeData("backgroundColor", value);
    } else if (optionType === "backgroundImageUrl") {
      setSelectedImageUrl(value);
      updateThemeData("backgroundImageURL", value);
    }
  };

  return (
    <section className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-2xl">배경화면을 선택해 주세요.</p>
          <p className="text-gray-500">
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <menu className="flex gap-1">
          <button
            type="button"
            onClick={handleShowColorOptions}
            className={`w-[122px] h-[40px] rounded-sm ${
              isThemeType ? "font-bold text-violet-500 outline" : "bg-gray-200"
            }`}
          >
            컬러
          </button>
          <button
            type="button"
            onClick={handleShowImageOptions}
            className={`w-[122px] h-[40px] rounded-sm ${
              !isThemeType ? "font-bold text-violet-500 outline" : "bg-gray-200"
            }`}
          >
            이미지
          </button>
        </menu>
      </div>
      {isThemeType ? (
        <BackgroundColorList
          selectedColor={selectedColor}
          handleOptionClick={handleOptionClick}
        />
      ) : (
        <BackgroundImageList
          handleOptionClick={handleOptionClick}
          themeData={themeData}
          setThemeData={setThemeData}
          selectedImageUrl={selectedImageUrl}
          setSelectedImageUrl={setSelectedImageUrl}
        />
      )}
    </section>
  );
};

export default ThemeSelection;
