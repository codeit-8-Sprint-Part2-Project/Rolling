import React, { ReactNode } from "react";

interface PostNavTitleContainerProps {
  children: ReactNode;
}

const PostNavTitleContainer: React.FC<PostNavTitleContainerProps> = ({
  children,
}) => {
  return <div className="flex items-center justify-end">{children}</div>;
};

export default PostNavTitleContainer;
