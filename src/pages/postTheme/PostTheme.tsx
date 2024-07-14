import * as React from "react";
import { useContext } from "react";
import Form from "./components/Form";
import ReceiverInput from "./components/ReceiverInput";
import ThemeSelection from "./components/ThemeSelection";
import { ThemeContext, ThemeContextProps } from "./api/ThemeProvider";

const PostTheme: React.FC = () => {
  const themeContext = useContext<ThemeContextProps | undefined>(ThemeContext);

  if (!themeContext) {
    return <div>Loading...</div>;
  }

  const {
    handleChange,
    themeData,
    isButtonDisabled,
    handleButtonClick,
    setIsButtonDisabled,
    setThemeData,
  } = themeContext;

  return (
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
  );
};

export default PostTheme;
