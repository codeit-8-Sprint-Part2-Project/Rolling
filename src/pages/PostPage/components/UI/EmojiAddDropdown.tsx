import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByPostId } from "../../api/getByPostId";
import { MessageRetrieve } from "../../../../DTO/message/MessageRetrieve";
import { ReactionRetrieve } from "../../../../DTO/reaction/ReactionRetrieve";
import EmojiPicker, { EmojiClickData, Categories } from "emoji-picker-react";
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

interface EmojiAddDropdownProps {
  onEmojiAdded: (emoji: string) => void;
}

function EmojiAddDropdown({ onEmojiAdded }: EmojiAddDropdownProps) {
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

  interface CustomNames {
    category: Categories;
    name: string;
  }

  const customNames: CustomNames[] = [
    {
      category: Categories.SUGGESTED,
      name: "자주 사용하는 이모티콘",
    },
    {
      category: Categories.SMILEYS_PEOPLE,
      name: "스마일 이모티콘",
    },
    {
      category: Categories.ANIMALS_NATURE,
      name: "동물 및 자연 이모티콘",
    },
    {
      category: Categories.FOOD_DRINK,
      name: "음식 및 음료 이모티콘",
    },
    {
      category: Categories.TRAVEL_PLACES,
      name: "여행 및 장소 이모티콘",
    },
    {
      category: Categories.ACTIVITIES,
      name: "활동 이모티콘",
    },
    {
      category: Categories.OBJECTS,
      name: "물건 이모티콘",
    },
    {
      category: Categories.SYMBOLS,
      name: "기호 이모티콘",
    },
    {
      category: Categories.FLAGS,
      name: "국기 이모티콘",
    },
  ];

  const onEmojiClick = async (emojiData: EmojiClickData, event: MouseEvent) => {
    const { emoji } = emojiData;

    try {
      await fetch(
        `https://rolling-api.vercel.app/8-1/recipients/${productid}/reactions/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken":
              "cMrDN6scAovJZnyjsmRlPqlWgHxn6RcG5aPP0i5ECbnDn8s04GQsqPBWDSyvnNsy",
          },
          body: JSON.stringify({
            emoji: emoji,
            type: "increase",
          }),
        }
      );

      onEmojiAdded(emoji);
    } catch (error) {
      console.error("이모티콘을 추가하는데 실패했습니다.", error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-[16px] py-[6px] border border-solid border-[#cccccc] rounded-[6px] font-pretendard font-[500] text-[16px] text-[#181818] flex gap-[4px]"
      >
        <img src={IconAdd} alt="이모지 추가 버튼" />
        <p>추가</p>
      </button>

      {isDropdownVisible && (
        <div className="border border-[#cccccc] rounded-[9px] shadow-custom absolute top-[45px] left-[-270px] z-10">
          <EmojiPicker
            searchPlaceholder="검색"
            categories={customNames}
            onEmojiClick={onEmojiClick}
          />
        </div>
      )}
    </div>
  );
}

export default EmojiAddDropdown;
