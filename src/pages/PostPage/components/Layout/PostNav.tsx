import React from "react";
import ShareButton from "../UI/ShareButton";
import EmojiAddButton from "../UI/EmojiAddButton";

const PostNav: React.FC = () => {
  return (
    <div>
      <EmojiAddButton />
      <ShareButton />
    </div>
  );
};

export default PostNav;
