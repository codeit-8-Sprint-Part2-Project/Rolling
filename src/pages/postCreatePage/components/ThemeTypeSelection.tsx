import React, { useState, useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { BackgroundColorList } from "./BackgroundColorList";
import BackgroundImageList from "./BackgroundImageList";
import { ThemeTypeSelectionProps } from "../constants/propTypes";
import useUpdateThemeData from "../hooks/useUpdateThemeData";
import ThemeTypeButton from "./UI/ThemeTypeButton";
import ThemePreview from "./ThemePreview";

const ThemeTypeSelection: React.FC<ThemeTypeSelectionProps> = ({
  setIsButtonDisabled,
  setThemeData,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("beige");
  const [isThemeType, setIsThemeType] = useState(true);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const { themeData } = useThemeContext();
  const updateThemeData = useUpdateThemeData(setThemeData);

  // isThemeType이 변경될 때 selectedImageUrd, selectedColor 업데이트
  useEffect(() => {
    if (isThemeType) {
      setSelectedImageUrl(null);
      setSelectedColor("beige");
      updateThemeData("backgroundColor", "beige");
    } else {
      setSelectedColor("beige");
    }
  }, [isThemeType, setIsButtonDisabled, updateThemeData]);

  // selectedImageUrl이 null일 때 themeData 초기화
  useEffect(() => {
    if (selectedImageUrl === null) {
      updateThemeData("backgroundImageURL", null);
    }
  }, [selectedImageUrl, setThemeData, updateThemeData]);

  // 테마 타입의 가시성을 관리하는 이벤트 핸들러, 기본 값 컬러
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
    <section className="flex flex-col gap-16 w-full mt-4 max-[1248px]:gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-2xl">배경화면을 선택해 주세요.</p>
          <p className="text-gray-500 mt-1 mb-4">
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
        </div>
        <menu className="relative flex gap-2">
          <ThemeTypeButton
            isThemeType={isThemeType}
            handleClick={handleShowColorOptions}
            label="컬러"
          />
          <ThemeTypeButton
            isThemeType={!isThemeType}
            handleClick={handleShowImageOptions}
            label="이미지"
          />
          <ThemePreview themeData={themeData} isThemeType={isThemeType} />
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

export default ThemeTypeSelection;
