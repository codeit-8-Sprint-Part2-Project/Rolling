import * as React from "react";
import useClickAnimation from "../../hooks/useClickAnimation";

interface ThemeTypeButtonProps {
  isThemeType: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

const ThemeTypeButton: React.FC<ThemeTypeButtonProps> = ({
  isThemeType,
  handleClick,
  label,
}) => {
  const { isClicked, handleClick: handleAnimationClick } = useClickAnimation();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleAnimationClick(() => handleClick(event));
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={`w-[122px] h-[40px] rounded-sm max-md:w-full ${
        isThemeType ? "font-bold text-violet-500 outline" : "bg-gray-200"
      } ${isClicked ? "animate-click" : ""}`}
    >
      {label}
    </button>
  );
};

export default ThemeTypeButton;
