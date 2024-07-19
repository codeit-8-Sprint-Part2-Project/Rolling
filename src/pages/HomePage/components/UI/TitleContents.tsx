import React, { ReactNode } from "react";

interface TitleContentsProps {
  children: ReactNode;
}

const TitleContents: React.FC<TitleContentsProps> = ({ children }) => {
  return (
    <p className="font-pretendard font-[400] text-[18px] text-[#555555]">
      {children}
    </p>
  );
};

export default TitleContents;
