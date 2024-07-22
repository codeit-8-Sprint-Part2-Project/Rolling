import React, { useState } from "react";
import ShareButton from "../UI/ShareButton";
import ToNameContent from "../UI/ToNameContent";
import ToMessageCount from "../UI/ToMessageCount";
import PostNavContainer from "../UI/PostNavContainer";
import ToEmojiCount from "../UI/ToEmojiCount";
import PostNavTitleContainer from "../UI/PostNavTitleContainer";

const PostNav: React.FC = () => {
  const [isEmojiDropdownVisible, setIsEmojiDropdownVisible] = useState(false);
  const [isEmojiAddDropdownVisible, setIsEmojiAddDropdownVisible] =
    useState(false);
  const [isShareDropdownVisible, setIsShareDropdownVisible] = useState(false);

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
          />
          <ShareButton
            url={window.location.href}
            isShareDropdownVisible={isShareDropdownVisible}
            handleShareDropdownToggle={handleShareDropdownToggle}
          />
        </PostNavTitleContainer>
      </PostNavContainer>
    </div>
  );
};

export default PostNav;
