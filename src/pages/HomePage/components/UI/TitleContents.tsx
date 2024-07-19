import React, { ReactNode } from "react";

interface TitleContentesProps {
  children: ReactNode;
}

const TitleContents: React.FC<TitleContentesProps> = ({ children }) => {
  return (
    <p className="font-pretendard font-[400] text-[18px] text-[#555555]">
      {children}
    </p>
  );
};

export default TitleContents;
