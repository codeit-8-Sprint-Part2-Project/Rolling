import React, { ReactNode } from "react";

interface NavContainerProps {
  children: ReactNode;
}

const NavContainer: React.FC<NavContainerProps> = ({ children }) => {
  return (
    <div className="w-screen border-b border-solid border-gray-300 h-16 flex items-center">
      <div className="container mx-auto max-w-[1200px]  flex justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default NavContainer;
