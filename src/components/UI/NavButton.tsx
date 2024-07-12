import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  children: ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ children }) => {
  return (
    <Link to="/post" className="inline-block">
      <button className="px-[16px] py-[8px] h-[40px] border border-solid border-[#cccccc] rounded-[6px] text-[16px] text-[#181818] font-pretendard">
        {children}
      </button>
    </Link>
  );
};

export default NavButton;
