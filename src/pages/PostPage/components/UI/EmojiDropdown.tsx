import { useState, useEffect } from "react";
import IconArrowDown from "../../assets/icons/IconArrowDown.png";
import { ReactionCreate } from "../../../../DTO/reaction/ReactionCreate";

function EmojiDropdown({ data }: { data: ReactionCreate | null }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayedEmojis = data?.results?.slice(0, windowWidth <= 768 ? 6 : 8);

  return (
    <>
      <button onClick={toggleDropdown}>
        <img src={IconArrowDown} alt="받은 모든 이모티콘 보기" />
      </button>

      {isDropdownVisible && (
        <div className="max-w-[214px] md:max-w-[344px] flex flex-wrap gap-[10px] rounded-[8px] border border-[#b6b6b6] shadow-custom p-[12px] md:p-[24px] bg-[#ffffff] absolute top-[40px] md:left-[-60px]">
          {displayedEmojis?.map((emoji) => (
            <ul className="flex gap-[8px] md:gap-[2px] min-w-[56px] md:min-w-[66px] rounded-[32px] px-[8px] py-[4px] md:px-[12px] md:py-[8px] bg-black/50 font-pretendard font-[400] text-[14px] md:text-[16px] text-[#ffffff] justify-center items-center">
              <li>{emoji.emoji}</li>
              <li>{emoji.count}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}

export default EmojiDropdown;
