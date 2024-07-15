import React, { ReactNode } from "react";

interface TitleContentesProps {
  children: ReactNode;
}

const TitlePoint: React.FC<TitleContentesProps> = ({ children }) => {
  return (
    <div className="bg-[#9935ff] rounded-[50px] px-[12px] py-[6px] font-pretendard font-[700] text-[14px] text-[#ffffff] inline-block">
      {children}
    </div>
  );
};

export default TitlePoint;
