import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByPostId } from "../../api/getByPostId";
import { MessageRetrieve } from "../../../../DTO/message/MessageRetrieve";
import { ReactionRetrieve } from "../../../../DTO/reaction/ReactionRetrieve";
import IconArrowDown from "../../assets/icons/IconArrowDown.png";

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

function EmojiDropdown() {
  const { productid } = useParams();
  const [data, setData] = useState<Recipient | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

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

  const displayedEmojis = data?.topReactions?.slice(0, 8);

  return (
    <>
      <button onClick={toggleDropdown}>
        <img src={IconArrowDown} alt="받은 모든 이모티콘 보기" />
      </button>

      {isDropdownVisible && (
        <div className="flex flex-wrap gap-[10px] rounded-[8px] border border-[#b6b6b6] shadow-custom p-[24px] bg-[#ffffff] absolute top-[40px] left-[-30px]">
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
