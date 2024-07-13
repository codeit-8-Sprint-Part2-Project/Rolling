import * as React from "react";
import ThemeProvider from "./pages/postTheme/api/ThemeProvider";
import PostTheme from "./pages/postTheme/PostTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <ThemeProvider>
              <PostTheme />
            </ThemeProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
