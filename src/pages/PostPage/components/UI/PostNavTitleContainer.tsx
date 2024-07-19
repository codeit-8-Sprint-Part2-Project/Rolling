import React, { ReactElement, ReactNode } from "react";

interface PostNavTitleContainerProps {
  children: ReactNode;
}

const PostNavTitleContainer = ({
  children,
}: PostNavTitleContainerProps): ReactElement => {
  return <div className="flex items-center justify-end">{children}</div>;
};

export default PostNavTitleContainer;
