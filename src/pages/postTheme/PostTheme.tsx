import * as React from "react";
import { useContext } from "react";
import Form from "./components/Form";
import ReceiverInput from "./components/ReceiverInput";
import ThemeSelection from "./components/ThemeSelection";
import { ThemeContext, ThemeContextProps } from "./core/ThemeProvider";

const PostTheme: React.FC = () => {
  const themeContext = useContext<ThemeContextProps | undefined>(ThemeContext);

  if (!themeContext) {
    return <div>Loading...</div>;
  }

  const { handleChange, themeData } = themeContext;

  return (
    <Form handleChange={handleChange} themeData={themeData}>
      <ReceiverInput handleChange={handleChange} themeData={themeData} />
      <ThemeSelection />
    </Form>
  );
};

export default PostTheme;
