import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByPostId } from "../../api/getByPostId";
import { MessageRetrieve } from "../../../../DTO/message/MessageRetrieve";
import { ReactionRetrieve } from "../../../../DTO/reaction/ReactionRetrieve";
import EmojiPicker from "emoji-picker-react";
import IconAdd from "../../assets/icons/IconEmojiAdd.png";

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

function EmojiAddDropdown() {
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

  return (
    <>
      <button
        onClick={toggleDropdown}
        className="px-[16px] py-[6px] border border-solid border-[#cccccc] rounded-[6px] font-pretendard font-[500] text-[16px] text-[#181818] flex gap-[4px]"
      >
        <img src={IconAdd} alt="이모지 추가 버튼" />
        <p>추가</p>
      </button>

      {isDropdownVisible && (
        <div className="border border-[#cccccc] shadow-custom absolute top-[40px] left-[-70px]">
          <EmojiPicker />
        </div>
      )}
    </>
  );
}

export default EmojiAddDropdown;
