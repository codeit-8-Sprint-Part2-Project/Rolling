import React from "react";
import ShareButton from "../UI/ShareButton";
import EmojiAddButton from "../UI/EmojiAddButton";
import ToNameContent from "../UI/ToNameContent";
import ToMessageCount from "../UI/ToMessageCount";
import PostNavContainer from "../UI/PostNavContainer";

const PostNav: React.FC = () => {
  return (
    <div>
      <PostNavContainer>
        <ToNameContent />
        <ToMessageCount />
        <EmojiAddButton />
        <ShareButton />
      </PostNavContainer>
    </div>
  );
};

export default PostNav;
