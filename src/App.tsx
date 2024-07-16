
import * as React from "react";
import ThemeProvider from "./pages/postTheme/api/ThemeProvider";
import PostTheme from "./pages/postTheme/PostTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/post"
          index
          element={
            <ThemeProvider>
              <PostTheme />
            </ThemeProvider>
          }
        />
        <Route
          path="/list"
          index
          element={
              <ListPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
