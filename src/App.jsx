import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Details from "./details/Details.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
