import React, { ReactNode } from "react";

interface TitleLineProps {
  children: ReactNode;
}

const TitleLine: React.FC<TitleLineProps> = ({ children }) => {
  return <span className="inline min-1155:block">{children}</span>;
};

export default TitleLine;
