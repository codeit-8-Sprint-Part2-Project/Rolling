import { ReactElement, ReactNode } from "react";

interface TitlePointProps {
  children: ReactNode;
}

const TitlePoint = ({ children }: TitlePointProps): ReactElement => {
  return (
    <p className="bg-[#9935ff] rounded-[50px] px-3 py-1.5 font-pretendard text-[14px] text-white inline-block font-bold">
      {children}
    </p>
  );
};

export default TitlePoint;
