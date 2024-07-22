import { useState, useEffect } from "react";
import IconArrowDown from "../../assets/icons/IconArrowDown.png";
import { ReactionCreate } from "../../../../DTO/reaction/ReactionCreate";

function EmojiDropdown({
  data,
  isDropdownVisible,
  toggleDropdown,
}: {
  data: ReactionCreate | null;
  isDropdownVisible: boolean;
  toggleDropdown: () => void;
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        <div className="max-w-[156px] xs:max-w-[226px] md:max-w-[360px] flex flex-wrap gap-2.5 rounded-lg border border-[#b6b6b6] shadow-custom p-3 md:p-6 bg-white absolute top-10 md:left-[-60px]">
          {displayedEmojis?.map((emoji) => (
            <ul className="flex gap-2 md:gap-0.5 min-w-[60px] md:min-w-[66px] rounded-[32px] px-2 py-1 md:px-3 md:py-2 bg-black/50 font-pretendard font-[400] text-[14px] md:text-base text-white justify-center items-center">
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
