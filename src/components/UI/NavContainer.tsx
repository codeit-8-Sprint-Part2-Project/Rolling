import React, { ReactNode } from "react";

interface NavContainerProps {
  children: ReactNode;
  className: string;
}

const NavContainer: React.FC<NavContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`flex border-b border-solid border-[#ededed] h-16 items-center px-6 ${className}`}
    >
      <div className="container mx-auto max-w-[1200px] flex justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default NavContainer;
