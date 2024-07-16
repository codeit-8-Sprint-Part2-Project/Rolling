import React from "react";
import ShareButton from "../UI/ShareButton";
import EmojiAddButton from "../UI/EmojiAddButton";
import ToNameContent from "../UI/ToNameContent";
import ToMessageCount from "../UI/ToMessageCount";

const PostNav: React.FC = () => {
  return (
    <div>
      <ToNameContent />
      <ToMessageCount />
      <EmojiAddButton />
      <ShareButton />
    </div>
  );
};

export default PostNav;
