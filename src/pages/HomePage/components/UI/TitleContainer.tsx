import React, { ReactNode } from "react";

interface TitleContainerProps {
  children: ReactNode;
  reverse?: boolean;
}

const TitleContainer: React.FC<TitleContainerProps> = ({
  children,
  reverse,
}) => {
  return (
    <div
      className={`${
        reverse
          ? "px-6 md:px-10 min-1155:px-[0]"
          : "px-6 md:px-10 min-1155:pl-[60px]"
      } flex flex-col items-start gap-4`}
    >
      {children}
    </div>
  );
};

export default TitleContainer;
