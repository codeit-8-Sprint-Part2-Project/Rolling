import { ReactElement, ReactNode } from "react";

interface TitleLineProps {
  children: ReactNode;
}

const TitleLine = ({ children }: TitleLineProps): ReactElement => {
  return <span className="inline min-1155:block">{children}</span>;
};

export default TitleLine;
