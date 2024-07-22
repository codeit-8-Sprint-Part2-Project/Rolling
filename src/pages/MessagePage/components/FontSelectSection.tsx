import React, { useState } from "react";
import Dropdown, { DropdownOption } from "./Dropdown";

type Font =
  | "Noto Sans"
  | "Pretendard"
  | "나눔명조"
  | "나눔손글씨 손편지체";

interface FontSelectSectionProps {
  selectedFont: Font;
  onFontChange: (font: Font) => void;
}

const FontSelectSection: React.FC<FontSelectSectionProps> = ({
  selectedFont,
  onFontChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    selectedFont ? { label: selectedFont, value: selectedFont } : null
  );

  const options: DropdownOption[] = [
    { label: "Noto Sans", value: "Noto Sans" },
    { label: "Pretendard", value: "Pretendard" },
    { label: "나눔명조", value: "나눔명조" },
    { label: "나눔손글씨 손편지체", value: "나눔손글씨 손편지체" },
  ];

  const handleOptionSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    onFontChange(option.value as Font);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="font-bold text-2xl">폰트 선택</p>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      />
    </div>
  );
};

export default FontSelectSection;
