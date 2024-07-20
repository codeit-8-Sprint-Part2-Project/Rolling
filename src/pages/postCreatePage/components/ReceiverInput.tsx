import React, { useState } from "react";
import { ReceiverInputProps } from "../constants/propTypes";

const ReceiverInput: React.FC<ReceiverInputProps> = ({
  themeData,
  handleChange,
}) => {
  const [error, setError] = useState<string>("");

  // 네임 필드 에러메세지
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const invalidCharsPattern = /[!@#$%^&*(),.?":{}|<>]/;

    const errors: string[] = [];

    if (!value) {
      setError("이름을 입력하지 않았습니다.");
      return; // 다른 조건 체크 중단
    }

    if (invalidCharsPattern.test(value)) {
      errors.push("특수문자 포함");
    }
    if (/\s/.test(value)) {
      errors.push("공백 포함");
    }
    if (value.length > 8) {
      errors.push("8글자 초과");
    }

    if (errors.length > 0) {
      setError(`조건에 맞는 이름이 아닙니다. : ${errors.join(", ")}`);
    } else {
      setError("");
    }
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
        className="py-3 px-4 rounded-lg outline outline-1 outline-gray-300 text-gray-500 placeholder-gray-500"
      />
      {error && <span className="text-red-500">{error}</span>}
    </section>
  );
};

export default ReceiverInput;
