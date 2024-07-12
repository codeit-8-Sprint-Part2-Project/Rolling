import React, { useState } from "react";
import { ThemeColorList } from "./ThemeColorList";
import { ThemeImageList } from "./ThemeImageList";

function ThemeSelection({ handleChange }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isThemType, setIsThemType] = useState(true);

  // 테마 타입을 관리하는 이벤트 핸들러, 기본 값은 컬러
  const handleShowColorOptions = () => {
    setIsThemType(true);
  };

  const handleShowImageOptions = () => {
    setIsThemType(false);
  };

  // 선택된 테마 타입과 옵션을 관리하는 이벤트 핸들러
  const handleOptionClick = (optionType, value) => {
    setSelectedOption(value); // 선택된 옵션 업데이트
    handleChange({
      target: { name: optionType, value: value },
    });
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
        <ThemeColorList
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      ) : (
        <ThemeImageList
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
      )}
    </section>
  );
}

export default ThemeSelection;
