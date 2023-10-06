import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Questions from "./components/Questions";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogsPage from "./components/BlogsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route index element={<HomePage />} />
        <Route path="/Questions" element={<Questions/>}/>
          <Route path="/BlogsPage" element={<BlogsPage />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}