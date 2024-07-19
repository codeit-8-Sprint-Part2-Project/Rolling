import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmojiDropdown from "./EmojiDropdown";
import EmojiAddDropdown from "./EmojiAddDropdown";
import { getByReactions } from "../../api/getByReactions";
import { ReactionCreate } from "../../../../DTO/reaction/ReactionCreate";

function ToEmojiCount() {
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
    <div className="border-r-[1px] flex items-center gap-[8px] min-1155:border-x-[1px] md:pl-[28px] pr-[13px] h-[28px] relative z-10">
      {displayedEmojis?.map((emoji) => (
        <ul
          key={emoji.id}
          className="flex gap-[8px] md:gap-[2px] rounded-[32px] px-[8px] py-[4px] md:px-[12px] md:py-[8px] bg-black/50 font-pretendard font-[400] text-[14px] md:text-[16px] text-[#ffffff] justify-center items-center"
        >
          <li>{emoji.emoji}</li>
          <li>{emoji.count}</li>
        </ul>
      ))}
      <EmojiDropdown data={data} />
      <EmojiAddDropdown onEmojiAdded={onEmojiadded} />
    </div>
  );
}

export default ToEmojiCount;
