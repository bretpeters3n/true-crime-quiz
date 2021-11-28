import React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
// import AccountMenu from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";

import Homepage from "./components/Homepage";
import Game from "./components/Game";
import AddQuestion from "./components/AddQuestion";
import Profile from "./components/Profile";
import { UserContext } from "./utils/UserContext";

export default function App() {
  return (
    <UserContext.Provider value="emily">
    <div>
      <NavTabs />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/addquestion" element={<AddQuestion />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
    </UserContext.Provider>
  );
}
