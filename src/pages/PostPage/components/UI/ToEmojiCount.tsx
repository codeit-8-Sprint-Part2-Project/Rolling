import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmojiDropdown from "./EmojiDropdown";
import EmojiAddDropdown from "./EmojiAddDropdown";
import { getByReactions } from "../../api/getByReactions";
import { ReactionCreate } from "../../../../DTO/reaction/ReactionCreate";

function ToEmojiCount({
  isEmojiDropdownVisible,
  handleEmojiDropdownToggle,
  isEmojiAddDropdownVisible,
  handleEmojiAddDropdownToggle,
}: {
  isEmojiDropdownVisible: boolean;
  handleEmojiDropdownToggle: () => void;
  isEmojiAddDropdownVisible: boolean;
  handleEmojiAddDropdownToggle: () => void;
}) {
  const { recipientId } = useParams();
  const [data, setData] = useState<ReactionCreate | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const params = recipientId ? { recipientId } : {};
        const Counts = await getByReactions(params);

        setData(Counts);
      } catch (error) {
        console.error("총 이모티콘을 불러오지 못했습니다.", error);
      }
    };

    fetchCount();
  }, [recipientId]);

  if (!data) {
    return <p>총 이모티콘을 불러오지 못했습니다.</p>;
  }

  const displayedEmojis = data?.results?.slice(0, 3);

  const onEmojiadded = async (emoji: string) => {
    const Counts = await getByReactions({ recipientId });
    setData(Counts);
  };

  return (
    <div className="border-r-[1px] flex items-center gap-2 min-1155:border-x-[1px] md:pl-7 pr-[13px] h-7 relative z-10">
      {displayedEmojis?.map((emoji, index) => (
        <ul
          key={emoji.id}
          className={`flex gap-2 md:gap-0.5 min-w-[60px] md:min-w-[66px] rounded-[32px] px-2 py-1 md:px-3 md:py-2 bg-black/50 font-pretendard font-[400] text-[14px] md:text-[16px] text-white justify-center items-center ${
            index === 2 ? "xs:flex hidden" : ""
          }`}
        >
          <li>{emoji.emoji}</li>
          <li>{emoji.count}</li>
        </ul>
      ))}
      <EmojiDropdown
        data={data}
        isDropdownVisible={isEmojiDropdownVisible}
        toggleDropdown={handleEmojiDropdownToggle}
      />
      <EmojiAddDropdown
        onEmojiAdded={onEmojiadded}
        isDropdownVisible={isEmojiAddDropdownVisible}
        toggleDropdown={handleEmojiAddDropdownToggle}
      />
    </div>
  );
}

export default ToEmojiCount;
