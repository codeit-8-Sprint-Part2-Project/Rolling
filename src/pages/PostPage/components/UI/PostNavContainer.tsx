import { ReactElement, ReactNode } from "react";

interface PostNavContainerProps {
  children: ReactNode;
  className?: string;
  justifyName?: string;
}

const PostNavContainer = ({
  children,
  className = "",
  justifyName = "",
}: PostNavContainerProps): ReactElement => {
  return (
    <div
      className={`border-b border-solid border-[#ededed] h-[52px] md:h-[68px] flex items-center px-6 ${className}`}
    >
      <div
        className={`container mx-auto max-w-[1200px] flex md:justify-between items-center ${justifyName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default PostNavContainer;
