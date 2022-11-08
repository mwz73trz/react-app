import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import AccordionPage from "./pages/AccordionPage";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/accordion" element={<AccordionPage />} />
      </Routes>
    </div>
  );
};

export default App;
