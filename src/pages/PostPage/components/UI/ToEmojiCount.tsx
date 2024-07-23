import React, { useEffect, useState, RefObject } from "react";
import { useParams } from "react-router-dom";
import EmojiDropdown from "./EmojiDropdown";
import EmojiAddDropdown from "./EmojiAddDropdown";
import { getByReactions } from "../../api/getByReactions";
import { ReactionCreate } from "../../../../DTO/reaction/ReactionCreate";
import RoundedLoadingBar from "./RoundedLoadingBar";

interface ToEmojiCountProps {
  isEmojiDropdownVisible: boolean;
  handleEmojiDropdownToggle: () => void;
  isEmojiAddDropdownVisible: boolean;
  handleEmojiAddDropdownToggle: () => void;
  emojiDropdownRef: RefObject<HTMLDivElement>;
  emojiAddDropdownRef: RefObject<HTMLDivElement>;
}

function ToEmojiCount({
  isEmojiDropdownVisible,
  handleEmojiDropdownToggle,
  isEmojiAddDropdownVisible,
  handleEmojiAddDropdownToggle,
  emojiDropdownRef,
  emojiAddDropdownRef,
}: ToEmojiCountProps) {
  // 상태 변수 정의
  const { recipientId } = useParams();
  const [data, setData] = useState<ReactionCreate | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 이모티콘 카운트를 가져오는 함수
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const params = recipientId ? { recipientId } : {};
        const Counts = await getByReactions(params);

        setData(Counts);
      } catch (error) {
        console.error("총 이모티콘을 불러오지 못했습니다.", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();
  }, [recipientId]);

  // PostNav에 바로 보일 상단 3개의 이모지
  const displayedEmojis = data?.results?.slice(0, 3);

  // 이모지를 추가하면 리랜더링 하기 위한 함수
  const onEmojiAdded = async (emoji: string) => {
    const Counts = await getByReactions({ recipientId });
    setData(Counts);
  };

  return (
    <>
      {isLoading ? (
        <RoundedLoadingBar />
      ) : (
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
          <div ref={emojiDropdownRef}>
            <EmojiDropdown
              data={data}
              isDropdownVisible={isEmojiDropdownVisible}
              toggleDropdown={handleEmojiDropdownToggle}
            />
          </div>
          <div ref={emojiAddDropdownRef}>
            <EmojiAddDropdown
              onEmojiAdded={onEmojiAdded}
              isDropdownVisible={isEmojiAddDropdownVisible}
              toggleDropdown={handleEmojiAddDropdownToggle}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ToEmojiCount;
