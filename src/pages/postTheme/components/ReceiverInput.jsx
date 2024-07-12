import React from "react";
import { useFormContext } from "../hooks/useFormContext";
import { ThemeContext } from "../core/ThemeProvider";

function ReceiverInput() {
  const { themeData, handleChange } = useFormContext(ThemeContext);

  return (
    <section>
      <label htmlFor="receiverName">To.</label>
      <input
        type="text"
        id="receiverName"
        name="receiverName"
        value={themeData.receiverName}
        onChange={handleChange}
      />
    </section>
  );
}

export default ReceiverInput;
