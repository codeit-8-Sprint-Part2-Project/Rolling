import React from "react";
import IconAdd from "../../assets/icons/IconEmojiAdd.png";

const EmojiAddButton: React.FC = () => {
  return (
    <button className="px-[16px] py-[6px] border border-solid border-[#cccccc] rounded-[6px] font-pretendard font-[500] text-[16px] text-[#181818] flex gap-[4px]">
      <img src={IconAdd} alt="이모지 추가 버튼" />
      <p>추가</p>
    </button>
  );
};

export default EmojiAddButton;
