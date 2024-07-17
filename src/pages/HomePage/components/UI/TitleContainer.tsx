import React, { ReactNode } from "react";

interface TitleContainerProps {
  children: ReactNode;
}

const TitleContainer: React.FC<TitleContainerProps> = ({ children }) => {
  return <div className="flex flex-col items-start gap-[16px]">{children}</div>;
};

export default TitleContainer;
