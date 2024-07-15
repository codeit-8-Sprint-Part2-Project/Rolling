import React from "react";
import IconShare from "../../assets/icons/IconShare.png";

const ShareButton: React.FC = () => {
  return (
    <button className="px-[16px] py-[6px] border border-solid border-[#cccccc] rounded-[6px]">
      <img src={IconShare} alt="공유하기 버튼" />
    </button>
  );
};

export default ShareButton;
