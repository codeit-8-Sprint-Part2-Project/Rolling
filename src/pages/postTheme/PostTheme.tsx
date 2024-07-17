import * as React from "react";
import Form from "./components/Form";
import ReceiverInput from "./components/ReceiverInput";
import ThemeSelection from "./components/ThemeSelection";
import { useThemeContext } from "./hooks/useThemeContext";

const PostTheme: React.FC = () => {
  const {
    handleChange,
    themeData,
    isButtonDisabled,
    handleButtonClick,
    setIsButtonDisabled,
    setThemeData,
  } = useThemeContext();

  return (
    <main className="flex justify-center ">
      <Form
        handleChange={handleChange}
        themeData={themeData}
        isButtonDisabled={isButtonDisabled}
        handleButtonClick={handleButtonClick}
        setThemeData={setThemeData}
      >
        <ReceiverInput handleChange={handleChange} themeData={themeData} />
        <ThemeSelection
          setIsButtonDisabled={setIsButtonDisabled}
          setThemeData={setThemeData}
        />
      </Form>
    </main>
  );
};

export default PostTheme;
