import React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
// import AccountMenu from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";

import Homepage from "./components/Homepage";
import Game from "./components/Game";
import AddQuestion from "./components/AddQuestion";

export default function App() {
  return (
    <div>
      <NavTabs />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/addquestion" element={<AddQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}
