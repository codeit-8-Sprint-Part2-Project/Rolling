import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByPostId } from "../../api/getByPostId";
import { MessageRetrieve } from "../../../../DTO/message/MessageRetrieve";
import { ReactionRetrieve } from "../../../../DTO/reaction/ReactionRetrieve";
import EmojiDropdown from "./EmojiDropdown";
import EmojiAddDropdown from "./EmojiAddDropdown";

interface Recipient {
  id?: number;
  team: string;
  name: string;
  backgroundColor: string;
  backgroundImageURL?: string;
  createdAt?: Date;
  messageCount?: string;
  recentMessages?: MessageRetrieve[];
  reactionCount?: number;
  topReactions?: ReactionRetrieve[];
}

function ToEmojiCount() {
  const { productid } = useParams();
  const [data, setData] = useState<Recipient | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const params = productid ? { productid } : {};
        const Counts = await getByPostId(params);

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

  const displayedEmojis = data?.topReactions?.slice(0, 3);

  const onEmojiadded = async (emoji: string) => {
    const Counts = await getByPostId({ productid });
    setData(Counts);
  };

  return (
    <div className="flex items-center gap-[8px] border-x-[1px] pl-[28px] pr-[13px] h-[28px] relative z-10">
      {displayedEmojis?.map((emoji) => (
        <div className="flex gap-[2px] rounded-[32px] w-[66px] px-[12px] py-[8px] bg-black/50 font-pretendard font-[400] text-[16px] text-[#ffffff] justify-center items-center">
          {emoji.emoji}
          {emoji.count}
        </div>
      ))}
      <EmojiDropdown />
      <EmojiAddDropdown onEmojiAdded={onEmojiadded} />
    </div>
  );
}

export default ToEmojiCount;
