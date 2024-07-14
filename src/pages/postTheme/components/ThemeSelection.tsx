import * as React from "react";
import { useState, useContext } from "react";
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

  const { handleChange, themeData } = useFormContext(ThemeContext);

  // 테마 타입의 가시성을 관리하는 이벤트 핸들러, 기본 값은 컬러
  const handleShowColorOptions = () => {
    setIsThemeType(true);
    setIsButtonDisabled(false);
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
          <p>배경화면을 선택해 주세요.</p>
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <menu className="flex gap-1">
          <button type="button" onClick={handleShowColorOptions}>
            컬러
          </button>
          <button type="button" onClick={handleShowImageOptions}>
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
        />
      )}
    </section>
  );
};

export default ThemeSelection;
