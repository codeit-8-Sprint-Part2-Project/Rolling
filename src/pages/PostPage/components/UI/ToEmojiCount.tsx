import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmojiDropdown from "./EmojiDropdown";
import EmojiAddDropdown from "./EmojiAddDropdown";
import { getByReactions } from "../../api/getByReactions";
import { ReactionCreate } from "../../../../DTO/reaction/ReactionCreate";

function ToEmojiCount() {
  const { productid } = useParams();
  const [data, setData] = useState<ReactionCreate | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const params = productid ? { productid } : {};
        const Counts = await getByReactions(params);

        setData(Counts);
      } catch (error) {
        console.error("총 이모티콘을 불러오지 못했습니다.", error);
      }
    };

    fetchCount();
  }, [productid]);

  if (!data) {
    return <p>총 이모티콘을 불러오지 못했습니다.</p>;
  }

  const displayedEmojis = data?.results?.slice(0, 3);

  const onEmojiadded = async (emoji: string) => {
    const Counts = await getByReactions({ productid });
    setData(Counts);
  };

  return (
    <div className="flex items-center gap-[8px] border-x-[1px] pl-[28px] pr-[13px] h-[28px] relative z-10">
      {displayedEmojis?.map((emoji) => (
        <div
          key={emoji.id}
          className="flex gap-[2px] rounded-[32px] w-[66px] px-[12px] py-[8px] bg-black/50 font-pretendard font-[400] text-[16px] text-[#ffffff] justify-center items-center"
        >
          {emoji.emoji}
          {emoji.count}
        </div>
      ))}
      <EmojiDropdown data={data} />
      <EmojiAddDropdown onEmojiAdded={onEmojiadded} />
    </div>
  );
}

export default ToEmojiCount;
