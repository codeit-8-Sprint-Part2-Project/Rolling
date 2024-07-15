import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
