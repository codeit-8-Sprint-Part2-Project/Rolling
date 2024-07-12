import * as React from "react";
import { useState } from "react";
import { useFormContext } from "../hooks/useFormContext";
import { ThemeContext } from "../core/ThemeProvider";
import { BackgroundColorList } from "./BackgroundColorList";
import { BackgroundImageList } from "./BackgroundImageList";

const ThemeSelection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isThemType, setIsThemType] = useState(true);

  const { themeData, handleChange } = useFormContext(ThemeContext);

  // 테마 타입을 관리하는 이벤트 핸들러, 기본 값은 컬러
  const handleShowColorOptions = () => {
    setIsThemType(true);
  };

  const handleShowImageOptions = () => {
    setIsThemType(false);
  };

  // 선택된 테마 타입과 옵션을 관리하는 이벤트 핸들러
  const handleOptionClick = (optionType: string, value: string) => {
    setSelectedOption(value); // 선택된 옵션 업데이트
    handleChange({
      target: { name: optionType, value: value },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <section>
      <label htmlFor="theme">배경화면을 선택해 주세요.</label>
      <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      <button type="button" onClick={handleShowColorOptions}>
        컬러
      </button>
      <button type="button" onClick={handleShowImageOptions}>
        이미지
      </button>
      {isThemType ? (
        <BackgroundColorList
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      ) : (
        <BackgroundImageList
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      )}
    </section>
  );
};

export default ThemeSelection;
