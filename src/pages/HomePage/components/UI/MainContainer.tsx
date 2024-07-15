import React, { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
  reverse?: boolean;
}

const MainContainer: React.FC<MainContainerProps> = ({ children, reverse }) => {
  return (
    <div
      className={`${
        reverse
          ? "flex-row-reverse justify-end"
          : "flex-row pl-[60px] justify-between"
      } container mx-auto max-w-[1200px] h-[324px] flex pt-[60px] items-start rounded-[16px] bg-[#f6f8ff]`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
