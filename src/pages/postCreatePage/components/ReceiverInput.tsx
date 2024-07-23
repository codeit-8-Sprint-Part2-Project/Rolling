import React, { useState } from "react";
import { ReceiverInputProps } from "../constants/propTypes";

const ReceiverInput: React.FC<ReceiverInputProps> = ({
  themeData,
  handleChange,
  setInputError,
}) => {
  const [error, setError] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  // 네임 필드 유효성 검사
  const validateInput = (value: string) => {
    const forbiddenCharsPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (
      forbiddenCharsPattern.test(value) ||
      /\s/.test(value) ||
      value.length > 12
    ) {
      const errorMessage =
        "특수문자, 공백을 포함하거나 12글자를 초과한 이름은 사용할 수 없습니다.";
      setError(errorMessage);
      setInputError(errorMessage);
      setIsValid(false);
    } else if (!value) {
      const errorMessage = "이름을 입력하지 않았습니다.";
      setError(errorMessage);
      setInputError(errorMessage);
      setIsValid(false);
    } else {
      setError("");
      setInputError("");
      setIsValid(true);
    }
  };

  // 포커스 아웃 시 유효성 검사
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    validateInput(value);
  };

  return (
    <section className="flex flex-col gap-3 w-full">
      <label className="font-bold text-2xl">To.</label>
      <input
        type="text"
        name="name"
        value={themeData?.name || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="받는 사람 이름을 입력해주세요"
        className={`py-3 px-4 rounded-lg outline outline-1 ${
          error ? "outline-red-500" : "outline-gray-300"
        } text-gray-500 placeholder-gray-500`}
      />
      {error && (
        <span
          className={`text-red-500 transition-all duration-300 ease-in-out 
            ${!isValid ? "animate-slide-down" : "animate-slide-up"}`}
        >
          {error}
        </span>
      )}
    </section>
  );
};

export default ReceiverInput;
