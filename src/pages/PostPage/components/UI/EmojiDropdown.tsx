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
  // 윈도우 너비 상태 변수
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 윈도우 크기 변경 이벤트 핸들러
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 768px의 windowWidth값을 기준으로 표시할 이모티콘 갯수 조절
  const displayedEmojis = data?.results?.slice(0, windowWidth <= 768 ? 6 : 8);

  return (
    <>
      <button onClick={toggleDropdown}>
        <img src={IconArrowDown} alt="받은 모든 이모티콘 보기" />
      </button>

      {isDropdownVisible && (
        <div className="max-w-[160px] xs:max-w-[240px] md:max-w-[360px] flex flex-wrap gap-2.5 rounded-lg border border-[#b6b6b6] shadow-custom p-3 md:p-6 bg-white absolute top-10 md:left-[-60px] justify-center items-center">
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
