import * as React from "react";
import { ThemeContextProps } from "../core/ThemeProvider";

interface ReceiverInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  themeData: ThemeContextProps["themeData"];
}

const ReceiverInput: React.FC<ReceiverInputProps> = ({
  themeData,
  handleChange,
}) => {
  return (
    <div>
      <label>To.</label>
      <input
        type="text"
        name="name"
        value={themeData?.name || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default ReceiverInput;
