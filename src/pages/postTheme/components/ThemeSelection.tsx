import * as React from "react";
import { useState, useEffect } from "react";
import { useFormContext } from "../hooks/useFormContext";
import { ThemeContext } from "../api/ThemeProvider";
import { BackgroundColorList } from "./BackgroundColorList";
import { BackgroundImageList } from "./BackgroundImageList";

interface ThemeSelectionProps {
  setIsButtonDisabled: (disabled: boolean) => void;
  setThemeData: React.Dispatch<React.SetStateAction<any>>;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({
  setIsButtonDisabled,
  setThemeData,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isThemeType, setIsThemeType] = useState(true);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const { handleChange, themeData } = useFormContext(ThemeContext);

  // isThemeType이 true일 때 selectedImageUrl을 null로 설정
  useEffect(() => {
    console.log(`isThemeType: ${isThemeType}`);
    if (isThemeType) {
      setSelectedImageUrl(null);
    }
  }, [isThemeType]);

  // selectedImageUrl이 null일 때 themeData 업데이트
  useEffect(() => {
    if (selectedImageUrl === null) {
      setThemeData((prevThemeData: any) => ({
        ...prevThemeData,
        backgroundImageURL: null,
      }));
    }
  }, [selectedImageUrl, setThemeData]);

  // 테마 타입의 가시성을 관리하는 이벤트 핸들러, 기본 값은 컬러
  const handleShowColorOptions = () => {
    setIsThemeType(true);
    setIsButtonDisabled(false);
    setSelectedImageUrl(null); // 컬러 옵션을 선택할 때 이미지 선택을 초기화
  };

  const handleShowImageOptions = () => {
    setIsThemeType(false);
    setIsButtonDisabled(themeData.backgroundImageURL === null);
  };

  // 선택된 테마 타입과 옵션을 관리하는 이벤트 핸들러
  const handleOptionClick = (optionType: string, value: string) => {
    setSelectedOption(value); // 선택된 옵션 업데이트
    handleChange({
      target: { name: optionType, value: value },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <section className="flex flex-col gap-12">
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
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      ) : (
        <BackgroundImageList
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
          themeData={themeData}
          setThemeData={setThemeData}
          isThemeType={isThemeType}
          selectedImageUrl={selectedImageUrl}
          setSelectedImageUrl={setSelectedImageUrl}
        />
      )}
    </section>
  );
};

export default ThemeSelection;
