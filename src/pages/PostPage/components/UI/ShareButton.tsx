import React, { ReactNode } from "react";

interface ShareButtonProps {
  children: ReactNode;
}

const ShareButton: React.FC<ShareButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default ShareButton;
