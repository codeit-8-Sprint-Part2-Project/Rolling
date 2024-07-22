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
      className={`w-[140px] h-[40px] max-md:w-full rounded-sm outline-none ${
        isDisabled ? "bg-gray-200" : "bg-violet-500 text-white"
      }`}
      disabled={isDisabled}
    >
      미리 보기
    </button>
  );
};

export default PreviewButton;
