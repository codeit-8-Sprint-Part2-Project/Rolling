import React, { ReactNode } from "react";

interface BodyContainerProps {
  children: ReactNode;
}

const BodyContainer: React.FC<BodyContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-[1200px] flex flex-col justify-center items-center gap-[30px] pt-12 min-1155:pt-[60px]">
      {children}
    </div>
  );
};

export default BodyContainer;
