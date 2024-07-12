import React from "react";
import Form from "./components/Form";
import ReceiverInput from "./components/ReceiverInput";
import ThemeSelection from "./components/ThemeSelection";

function PostTheme() {
  return (
    <Form>
      <ReceiverInput />
      <ThemeSelection />
    </Form>
  );
}

export default PostTheme;
