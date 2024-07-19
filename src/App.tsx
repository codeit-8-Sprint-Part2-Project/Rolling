import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import PostPage from "./pages/PostPage/PostPage";
import ThemeProvider from "./pages/postCreatePage/api/ThemeProvider";
import PostCreate from "./pages/postCreatePage/PostCreate";
import Header from "./components/Layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="post">
          <Route
            index
            element={
              <ThemeProvider>
                <PostCreate />
              </ThemeProvider>
            }
          />
          <Route path=":recipientId" element={<PostPage />} />
        </Route>
        <Route path="list">
          <Route index element={<ListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
