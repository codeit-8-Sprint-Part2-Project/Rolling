import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TitleButtonProps {
  children: ReactNode;
}

const TitleButton: React.FC<TitleButtonProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-[1200px] text-center mb-[150px]">
      <Link to="/list">
        <button className="px-[24px] py-[14px] w-full min-1155:w-[280px] mt-[48px] border-none rounded-[12px] bg-[#9935ff] text-[18px] text-[#ffffff] font-pretendard font-bold">
          {children}
        </button>
      </Link>
    </div>
  );
};

export default TitleButton;
