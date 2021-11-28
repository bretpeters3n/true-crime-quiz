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
import { UserContext, UserProvider } from "./utils/UserContext";
import LoginSignUp from "./components/LoginSignUp";
import {Auth0Provider} from '@auth0/auth0-react';
export default function App() {
  return (<Auth0Provider
    domain="dev-r9whaml0.us.auth0.com"
    clientId="2f36QL7XqWEwxBXKVjDy7j6x2AndBmic"
    redirectUri={window.location.origin}
  >
    <UserProvider>
    <div>
      <NavTabs />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/addquestion" element={<AddQuestion />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<LoginSignUp />} />
        </Routes>
      </Router>
    </div>
    </UserProvider>
  </Auth0Provider>
  );
}
