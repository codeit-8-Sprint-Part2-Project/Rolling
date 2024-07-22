import * as React from "react";

interface ThemeTypeButtonProps {
  isThemeType: boolean;
  handleClick: () => void;
  label: string;
}

const ThemeTypeButton: React.FC<ThemeTypeButtonProps> = ({
  isThemeType,
  handleClick,
  label,
}) => (
  <button
    type="button"
    onClick={handleClick}
    className={`w-[122px] h-[40px] rounded-sm max-md:w-full ${
      isThemeType ? "font-bold text-violet-500 outline" : "bg-gray-200"
    }`}
  >
    {label}
  </button>
);

export default ThemeTypeButton;
