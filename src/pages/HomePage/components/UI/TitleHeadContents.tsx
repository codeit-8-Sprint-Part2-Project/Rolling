import { ReactElement, ReactNode } from "react";

interface TitleHeadContentesProps {
  children: ReactNode;
}

const TitleHeadContents = ({
  children,
}: TitleHeadContentesProps): ReactElement => {
  return (
    <h2 className="font-pretendard text-[24px] text-[#181818] font-bold">
      {children}
    </h2>
  );
};

export default TitleHeadContents;
