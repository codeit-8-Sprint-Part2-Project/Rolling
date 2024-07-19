import React, { ReactNode } from "react";

interface TitleHeadContentesProps {
  children: ReactNode;
}

const TitleHeadContents: React.FC<TitleHeadContentesProps> = ({ children }) => {
  return (
    <h2 className="font-pretendard text-[24px] text-[#181818] font-bold">
      {children}
    </h2>
  );
};

export default TitleHeadContents;
