import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

interface TitleButtonProps {
  children: ReactNode;
}

const TitleButton: React.FC<TitleButtonProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto max-w-[1200px] text-center mb-[150px]">
      <Link to="/post">
        <button 
          className={`
            px-6 py-[14px] w-full mt-12 border-none rounded-xl 
            bg-[#9935ff] text-[18px] text-white font-pretendard 
            md:w-[280px] fixed bottom-0 left-0 z-50 md:static md:relative 
            md:m-0 m-[20px] max-w-[calc(100%-40px)]
            transition-all duration-300 ease-in-out
            ${isHovered ? 'bg-[#8023e6] transform scale-105' : ''}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

export default TitleButton;