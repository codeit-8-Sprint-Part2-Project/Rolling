import React, { useEffect, useState, ReactElement } from "react";
import useSubmitData from "../hooks/useSubmitData";
import { FormProps } from "../constants/propTypes";
import { CreateButton } from "../UI/CreateButton";

const ThemeForm: React.FC<FormProps> = ({
  children,
  handleChange,
  themeData,
  setThemeData,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { handleSubmit, isSubmitting } = useSubmitData(themeData, setThemeData);

  // 데이터 값이 변경될 때마다 이름 유효성 검사
  useEffect(() => {
    setIsDisabled(!themeData.name?.trim());
  }, [themeData]);

  // 버튼 클릭 시 폼 제출
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(e as unknown as React.FormEvent);
  };

  return (
    <form className="flex flex-col grow items-center mt-14 m-auto gap-12 max-w-3xl max-md:mt-12 max-[1248px]:mx-6">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, {
            handleChange,
            themeData,
            setThemeData,
            setIsDisabled,
          });
        }
        return child;
      })}
      <CreateButton
        onButtonClick={onButtonClick}
        isDisabled={isDisabled}
        isSubmitting={isSubmitting}
      />
    </form>
  );
};

export default ThemeForm;
