import * as React from "react";

interface PreviewButtonProps {
  handleOpenModal: () => void;
  isDisabled: boolean;
}

const PreviewButton: React.FC<PreviewButtonProps> = ({
  handleOpenModal,
  isDisabled,
}) => {
  return (
    <button
      type="button"
      onClick={handleOpenModal}
      className={`absolute right-0 w-[140px] h-full max-md:w-[122px] rounded-sm ${
        isDisabled ? "bg-gray-200" : "bg-violet-500 text-white"
      }`}
      disabled={isDisabled}
    >
      미리 보기
    </button>
  );
};

export default PreviewButton;
