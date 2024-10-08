import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translate from "./pages/Translate";
import Chat from "./pages/Chat";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import About from "./pages/About";

function App({ userName }) {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
