import * as React from "react";
import ThemeForm from "./components/ThemeForm";
import ReceiverInput from "./components/ReceiverInput";
import ThemeTypeSelection from "./components/ThemeTypeSelection";
import { useThemeContext } from "./hooks/useThemeContext";
import Nav from "../../components/Layout/Nav";

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
    <>
      <Nav />
      <main className="flex justify-center">
        <ThemeForm
          handleChange={handleChange}
          themeData={themeData}
          isButtonDisabled={isButtonDisabled}
          handleButtonClick={handleButtonClick}
          setThemeData={setThemeData}
        >
          <ReceiverInput handleChange={handleChange} themeData={themeData} />
          <ThemeTypeSelection
            setIsButtonDisabled={setIsButtonDisabled}
            setThemeData={setThemeData}
          />
        </ThemeForm>
      </main>
    </>
  );
};

export default PostTheme;
