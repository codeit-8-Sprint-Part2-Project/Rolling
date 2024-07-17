import * as React from "react";
import { useState } from "react";
import { ReceiverInputProps } from "../constants/propTypes";

const ReceiverInput: React.FC<ReceiverInputProps> = ({
  themeData,
  handleChange,
}) => {
  const [error, setError] = useState<string>("");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (!value) {
      setError("이름을 입력하지 않았습니다.");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold text-2xl">To.</label>
      <input
        type="text"
        name="name"
        value={themeData?.name || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="받는 사람 이름을 입력해주세요"
        className="py-3 px-4 rounded-lg outline outline-1 outline-gray-300 text-gray-500"
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default ReceiverInput;
