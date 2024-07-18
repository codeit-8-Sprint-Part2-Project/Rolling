import React, { ReactNode } from "react";

interface TitleContainerProps {
  children: ReactNode;
  reverse?: Boolean;
}

const TitleContainer: React.FC<TitleContainerProps> = ({
  children,
  reverse,
}) => {
  return (
    <div
      className={`${
        reverse
          ? "px-[24px] md:px-[40px] min-1155:px-[0]"
          : "px-[24px] md:px-[40px] min-1155:pl-[60px]"
      } flex flex-col items-start gap-[16px]`}
    >
      {children}
    </div>
  );
};

export default TitleContainer;
