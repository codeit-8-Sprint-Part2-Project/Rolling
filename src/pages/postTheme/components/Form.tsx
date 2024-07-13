import * as React from "react";
import { ReactNode } from "react";
import { ThemeContextProps } from "../core/ThemeProvider";

interface FormProps {
  children: ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  themeData: ThemeContextProps["themeData"];
}

const Form: React.FC<FormProps> = ({ children, handleChange, themeData }) => {
  // 서버로 폼 데이터 전송, 비동기 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://rolling-api.vercel.app/8-1/recipients/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(themeData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`서버 응답 에러: ${response.status} ${errorText}`);
      }

      const result = await response.json();
      console.log("폼 제출 성공:", result);
    } catch (error) {
      console.error("폼 제출 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childProps = { handleChange, themeData };
          return React.cloneElement(child, childProps);
        }
        return child;
      })}
      <button type="submit">생성하기</button>
    </form>
  );
};

export default Form;
