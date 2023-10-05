import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Questions from "./components/Questions";
import Blogs from "./components/Blogs";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route index element={<HomePage />} />
        <Route path="/Questions" element={<Questions/>}/>
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}