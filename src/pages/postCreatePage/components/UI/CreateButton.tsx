import * as React from "react";
import useClickAnimation from "../../hooks/useClickAnimation";

export interface CreateButtonProps {
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled: boolean;
  isSubmitting: boolean;
}

export const CreateButton: React.FC<CreateButtonProps> = ({
  onButtonClick,
  isDisabled,
  isSubmitting,
}) => {
  const { isClicked, handleClick } = useClickAnimation();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && !isSubmitting) {
      handleClick(() => onButtonClick(e));
    }
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      disabled={isDisabled || isSubmitting}
      className={`flex w-full justify-center items-center my-6 py-3.5 h-[52px] rounded-xl text-white text-lg
        ${isDisabled ? "bg-gray-400" : "bg-violet-500"} ${
        isClicked ? "animate-click" : ""
      }`}
    >
      생성하기
    </button>
  );
};
