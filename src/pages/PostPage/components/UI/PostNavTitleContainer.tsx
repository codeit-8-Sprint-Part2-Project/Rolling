import React, { ReactNode } from "react";

interface PostNavTitleContainerProps {
  children: ReactNode;
}

const PostNavTitleContainer: React.FC<PostNavTitleContainerProps> = ({
  children,
}) => {
  return <div className="flex items-center">{children}</div>;
};

export default PostNavTitleContainer;
