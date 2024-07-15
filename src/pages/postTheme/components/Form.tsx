import * as React from "react";
import { ReactNode, useEffect, useState } from "react";
import { ThemeContextProps } from "../api/ThemeProvider";
import { useNavigate } from "react-router-dom";

interface FormProps {
  children: ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  themeData: ThemeContextProps["themeData"];
  setThemeData: React.Dispatch<
    React.SetStateAction<ThemeContextProps["themeData"]>
  >;
  isButtonDisabled: boolean;
  handleButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Form: React.FC<FormProps> = ({
  children,
  handleChange,
  themeData,
  setThemeData,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  // 이름 유효성 검사
  const validateForm = () => {
    if (themeData.name && themeData.name.trim() !== "") {
      return true;
    }
    return false;
  };

  // 데이터 값이 변경될 때마다 유효성 검사
  useEffect(() => {
    const isValid = validateForm();
    setIsDisabled(!isValid);
  }, [themeData]);

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
      console.log("폼 데이터 전송 완료:", result);

      navigate(`/post/${themeData.id}`);
    } catch (error) {
      console.error("폼 데이터 전송 실패:", error);
    }
  };

  // 버튼 클릭 시 폼 제출
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(e as unknown as React.FormEvent);
  };

  return (
    <form className="flex flex-col mt-32 m-auto gap-12 max-w-3xl">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childProps = {
            handleChange,
            themeData,
            setThemeData,
            setIsDisabled,
          };
          return React.cloneElement(child, childProps);
        }
        return child;
      })}
      <button
        type="button"
        onClick={onButtonClick}
        disabled={isDisabled}
        className="mt-6 h-[52px] rounded-xl bg-violet-500 text-white text-lg "
      >
        생성하기
      </button>
    </form>
  );
};

export default Form;
