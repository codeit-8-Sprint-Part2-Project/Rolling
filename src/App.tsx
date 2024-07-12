import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
