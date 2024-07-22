import * as React from "react";
import useClickAnimation from "../../hooks/useClickAnimation";

interface PreviewButtonProps {
  handleOpenModal: () => void;
  isDisabled: boolean;
}

const PreviewButton: React.FC<PreviewButtonProps> = ({
  handleOpenModal,
  isDisabled,
}) => {
  const { isClicked, handleClick } = useClickAnimation();

  const handleButtonClick = () => {
    if (!isDisabled) {
      handleClick(handleOpenModal);
    }
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={`w-[140px] h-[40px] max-md:w-full rounded-sm outline-none ${
        isDisabled ? "bg-gray-200" : "bg-violet-500 text-white"
      } ${isClicked ? "animate-click" : ""}`}
      disabled={isDisabled}
    >
      미리 보기
    </button>
  );
};

export default PreviewButton;
