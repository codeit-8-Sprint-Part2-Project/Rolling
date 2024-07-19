import React from "react";

interface CloseButtonProps {
  handleCloseModal: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleCloseModal }) => {
  return (
    <button
      onClick={handleCloseModal}
      className="w-full mt-4 p-2 bg-violet-500 text-white rounded"
    >
      닫기
    </button>
  );
};

export default CloseButton;
