import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";
import * as React from "react";
import ThemeProvider from "./pages/postTheme/api/ThemeProvider";
import PostTheme from "./pages/postTheme/PostTheme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="post">
          <Route
            index
            element={
              <ThemeProvider>
                <PostTheme />
              </ThemeProvider>
            }
          />
          <Route path=":productid" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
