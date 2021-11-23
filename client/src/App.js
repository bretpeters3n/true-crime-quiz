import React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
// import AccountMenu from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Game from "./components/Game";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}
