import React from "react";
import ShareButton from "../UI/ShareButton";
import EmojiAddButton from "../UI/EmojiAddButton";
import ToNameContent from "../UI/ToNameContent";

const PostNav: React.FC = () => {
  return (
    <div>
      <ToNameContent />
      <EmojiAddButton />
      <ShareButton />
    </div>
  );
};

export default PostNav;
