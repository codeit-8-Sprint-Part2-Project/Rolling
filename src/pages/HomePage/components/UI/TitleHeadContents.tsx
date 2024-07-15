import React, { ReactNode } from "react";

interface TitleHeadContentesProps {
  children: ReactNode;
}

const TitleHeadContents: React.FC<TitleHeadContentesProps> = ({ children }) => {
  return (
    <h2 className="font-pretendard font-[700] text-[24px] text-[#181818]">
      {children}
    </h2>
  );
};

export default TitleHeadContents;
