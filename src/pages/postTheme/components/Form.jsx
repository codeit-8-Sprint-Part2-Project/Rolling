import React from "react";
import { useFormContext } from "../hooks/useFormContext";
import { ThemeContext } from "../core/ThemeProvider";

function Form({ children }) {
  const { themeData, handleChange } = useFormContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ThemeData:", themeData);
  };

  const isFormValid =
    themeData.receiverName && (themeData.themeColor || themeData.themeImage);

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { themeData, handleChange });
        }
        return child;
      })}
      <button
        type="submit"
        className={`submit-btn ${isFormValid ? "active-btn" : ""}`}
        disabled={!isFormValid}
      >
        생성하기
      </button>
    </form>
  );
}

export default Form;
