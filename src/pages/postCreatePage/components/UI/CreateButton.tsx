import * as React from "react";

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
  return (
    <button
      type="button"
      onClick={onButtonClick}
      disabled={isDisabled || isSubmitting}
      className={`flex w-full justify-center items-center my-6 py-3.5 h-[52px] rounded-xl text-white text-lg
        ${isDisabled ? "bg-gray-400" : "bg-violet-500"}`}
    >
      생성하기
    </button>
  );
};
