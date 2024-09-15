import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translate from "./pages/Translate";
import Chat from "./pages/Chat";
import Faq from "./pages/Faq";
import Login from "./pages/Login";

function App({ userName }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
