import React, { useState } from "react";

interface InputSenderProps {
  sender: string;
  onSenderChange: (sender: string) => void;
}

const InputSenderSection: React.FC<InputSenderProps> = ({ sender, onSenderChange }) => {
  const [senderError, setSenderError] = useState<string>('');

  const handleSenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSenderChange(value);
    if (value.trim().length === 0) {
      setSenderError('이름을 입력해주세요.');
    } else {

      setSenderError('');
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="font-bold text-2xl">From.</p>
      <input
        type="text"
        value={sender}
        placeholder="이름을 입력해주세요"
        onChange={handleSenderChange}
        className={`py-3 px-4 rounded-lg outline outline-1 ${
          senderError
            ? 'outline-red-500 text-red-500 placeholder-red-500'
            : 'outline-gray-300 text-gray-500 placeholder-gray-500'
        }`}
      />
    </div>
  );
};

export default InputSenderSection;