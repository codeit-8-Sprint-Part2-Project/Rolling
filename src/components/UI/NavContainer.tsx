import React, { ReactNode } from "react";

interface HeaderContainerProps {
  children: ReactNode;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ children }) => {
  return (
    <div className="w-screen border-b border-solid border-gray-300 h-16 flex items-center">
      <div className="container mx-auto max-w-[1200px] h-[40px] flex justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default HeaderContainer;
