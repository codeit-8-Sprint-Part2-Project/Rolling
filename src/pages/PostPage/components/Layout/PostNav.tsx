import React, { useState, useRef, useEffect } from "react";
import ShareButton from "../UI/ShareButton";
import ToNameContent from "../UI/ToNameContent";
import ToMessageCount from "../UI/ToMessageCount";
import PostNavContainer from "../UI/PostNavContainer";
import ToEmojiCount from "../UI/ToEmojiCount";
import PostNavTitleContainer from "../UI/PostNavTitleContainer";

const PostNav: React.FC = () => {
  // 상태 변수 정의
  const [isEmojiDropdownVisible, setIsEmojiDropdownVisible] = useState(false);
  const [isEmojiAddDropdownVisible, setIsEmojiAddDropdownVisible] =
    useState(false);
  const [isShareDropdownVisible, setIsShareDropdownVisible] = useState(false);

  // 참조 변수 정의
  const emojiDropdownRef = useRef<HTMLDivElement>(null);
  const emojiAddDropdownRef = useRef<HTMLDivElement>(null);
  const shareDropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 외부를 클릭하면 닫아주는 함수
  const handleClickOutside = (event: MouseEvent) => {
    if (
      emojiDropdownRef.current &&
      !emojiDropdownRef.current.contains(event.target as Node) &&
      emojiAddDropdownRef.current &&
      !emojiAddDropdownRef.current.contains(event.target as Node) &&
      shareDropdownRef.current &&
      !shareDropdownRef.current.contains(event.target as Node)
    ) {
      setIsEmojiDropdownVisible(false);
      setIsEmojiAddDropdownVisible(false);
      setIsShareDropdownVisible(false);
    }
  };

  // handleClickOutside 이벤트 리스너 설정
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 각 드롭다운 토글 핸들러
  const handleEmojiDropdownToggle = () => {
    setIsEmojiDropdownVisible(!isEmojiDropdownVisible);
    setIsEmojiAddDropdownVisible(false);
    setIsShareDropdownVisible(false);
  };

  const handleEmojiAddDropdownToggle = () => {
    setIsEmojiAddDropdownVisible(!isEmojiAddDropdownVisible);
    setIsEmojiDropdownVisible(false);
    setIsShareDropdownVisible(false);
  };

  const handleShareDropdownToggle = () => {
    setIsShareDropdownVisible(!isShareDropdownVisible);
    setIsEmojiDropdownVisible(false);
    setIsEmojiAddDropdownVisible(false);
  };

  return (
    <div>
      <PostNavContainer className={"block md:hidden"}>
        <ToNameContent />
      </PostNavContainer>
      <PostNavContainer justifyName={"justify-end md:justify-between"}>
        <ToNameContent className={"hidden md:block"} />
        <PostNavTitleContainer>
          <ToMessageCount />
          <ToEmojiCount
            isEmojiDropdownVisible={isEmojiDropdownVisible}
            handleEmojiDropdownToggle={handleEmojiDropdownToggle}
            isEmojiAddDropdownVisible={isEmojiAddDropdownVisible}
            handleEmojiAddDropdownToggle={handleEmojiAddDropdownToggle}
            emojiDropdownRef={emojiDropdownRef}
            emojiAddDropdownRef={emojiAddDropdownRef}
          />
          <ShareButton
            url={window.location.href}
            isShareDropdownVisible={isShareDropdownVisible}
            handleShareDropdownToggle={handleShareDropdownToggle}
            shareDropdownRef={shareDropdownRef}
          />
        </PostNavTitleContainer>
      </PostNavContainer>
    </div>
  );
};

export default PostNav;
