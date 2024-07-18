
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
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
          <Route path=":recipientId" element={<PostPage />} />
        </Route>
        <Route path="list">
          <Route
            index
            element={
                <ListPage />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
