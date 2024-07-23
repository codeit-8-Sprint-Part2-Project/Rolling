import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import PostPage from "./pages/PostPage/PostPage";
import ThemeProvider from "./pages/postCreatePage/api/ThemeProvider";
import PostCreate from "./pages/postCreatePage/PostCreate";
import Header from "./components/Layout/Header";
import MessagePage from "./pages/MessagePage/MessagePage";
import ScrollToTop from "./components/Common/ScrollToTop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path=":recipientId">
            <Route index element={<PostPage />} />
            <Route path="message" element={<MessagePage />} />
          </Route>
        </Route>
        <Route path="list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
