import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TitleButtonProps {
  children: ReactNode;
}

const TitleButton: React.FC<TitleButtonProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-[1200px] text-center mb-[150px]">
      <Link to="/list">
        <button className="px-6 py-[14px] w-full min-1155:w-[280px] mt-12 border-none rounded-xl bg-[#9935ff] text-[18px] text-white font-pretendard font-bold">
          {children}
        </button>
      </Link>
    </div>
  );
};

export default TitleButton;
