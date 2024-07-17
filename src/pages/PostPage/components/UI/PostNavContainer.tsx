import React, { ReactNode } from "react";

interface PostNavContainerProps {
  children: ReactNode;
}

const PostNavContainer: React.FC<PostNavContainerProps> = ({ children }) => {
  return (
    <div className="border-b border-solid border-[#ededed] h-[68px] flex items-center">
      <div className="container mx-auto max-w-[1200px] flex justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default PostNavContainer;
