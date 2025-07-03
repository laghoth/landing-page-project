import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Version1 from "./versions/v1/App.jsx";
import Version2 from "./versions/v2/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Version1 />} />
        <Route path="/v1" element={<Version1 />} />
        <Route path="/v2" element={<Version2 />} />
      </Routes>
    </Router>
  </StrictMode>
);
