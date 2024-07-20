import React, { useEffect, useState } from "react";
import ReceiverInput from "./components/ReceiverInput";
import ThemeTypeSelection from "./components/ThemeTypeSelection";
import { useThemeContext } from "./hooks/useThemeContext";
import { CreateButton } from "./components/UI/CreateButton";
import useSubmitData from "./hooks/useSubmitData";

const PostCreate: React.FC = () => {
  const { handleChange, themeData, setIsButtonDisabled, setThemeData } =
    useThemeContext();
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputError, setInputError] = useState<string>("");
  const { handleSubmit, isSubmitting } = useSubmitData(themeData, setThemeData);

  // 데이터 값이 변경될 때마다 이름 유효성 검사
  useEffect(() => {
    setIsDisabled(!themeData.name?.trim() || !!inputError);
  }, [themeData, inputError]);

  // 버튼 클릭 시 폼 제출
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(e as unknown as React.FormEvent);
  };

  return (
    <>
      <main className="flex justify-center font-pretendard">
        <form className="flex flex-col grow items-center mt-14 m-auto gap-12 max-w-3xl max-md:mt-12 max-[1248px]:mx-6">
          <ReceiverInput
            handleChange={handleChange}
            themeData={themeData}
            setInputError={setInputError}
          />
          <ThemeTypeSelection
            setIsButtonDisabled={setIsButtonDisabled}
            setThemeData={setThemeData}
          />
          <CreateButton
            onButtonClick={onButtonClick}
            isDisabled={isDisabled}
            isSubmitting={isSubmitting}
          />
        </form>
      </main>
    </>
  );
};

export default PostCreate;
