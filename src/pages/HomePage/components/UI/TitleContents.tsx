import { ReactElement, ReactNode } from "react";

interface TitleContentsProps {
  children: ReactNode;
}

const TitleContents = ({ children }: TitleContentsProps): ReactElement => {
  return (
    <p className="font-pretendard font-[400] text-[18px] text-[#555555]">
      {children}
    </p>
  );
};

export default TitleContents;
