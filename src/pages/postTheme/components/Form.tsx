import * as React from "react";
import { ReactNode } from "react";
import { ThemeContextProps } from "../core/ThemeProvider";

interface FormProps {
  children: ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  themeData: ThemeContextProps["themeData"];
}

const Form: React.FC<FormProps> = ({ children, handleChange, themeData }) => {
  return (
    <form>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childProps = { handleChange, themeData };
          return React.cloneElement(child, childProps);
        }
        return child;
      })}
      <button type="submit">제출하기</button>
    </form>
  );
};

export default Form;
