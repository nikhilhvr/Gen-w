import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}