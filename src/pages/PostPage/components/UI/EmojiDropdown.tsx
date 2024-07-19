import { useState } from "react";
import IconArrowDown from "../../assets/icons/IconArrowDown.png";
import { ReactionCreate } from "../../../../DTO/reaction/ReactionCreate";

function EmojiDropdown({ data }: { data: ReactionCreate | null }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const displayedEmojis = data?.results?.slice(0, 8);

  return (
    <>
      <button onClick={toggleDropdown}>
        <img src={IconArrowDown} alt="받은 모든 이모티콘 보기" />
      </button>

      {isDropdownVisible && (
        <div className="max-w-[344px] flex flex-wrap gap-[10px] rounded-[8px] border border-[#b6b6b6] shadow-custom p-[24px] bg-[#ffffff] absolute top-[40px] left-[-60px]">
          {displayedEmojis?.map((emoji) => (
            <div className="flex gap-[2px] rounded-[32px] w-[66px] px-[12px] py-[8px] bg-black/50 font-pretendard font-[400] text-[16px] text-[#ffffff] justify-center items-center">
              {emoji.emoji}
              {emoji.count}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default EmojiDropdown;
