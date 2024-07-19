import { ReactElement, ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
  reverse?: boolean;
}

const MainContainer = ({
  children,
  reverse,
}: MainContainerProps): ReactElement => {
  return (
    <div
      className={`${
        reverse
          ? "flex-col min-1155:flex-row-reverse min-1155:justify-end"
          : "flex-col min-1155:flex-row min-1155:justify-between"
      } container mx-auto max-w-[1200px] min-1155:h-[324px] flex py-6 md:pt-10 min-1155:pt-[60px] items-center min-1155:items-start rounded-2xl bg-[#f6f8ff]`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
