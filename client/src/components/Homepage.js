import * as React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { LoginButton } from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Homepage() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <div className="small-screen">
        <Link to="/profile">
          <Button variant="primary">test button</Button>
        </Link>
        <Link to="/profile">
          <Button variant="primary">test button</Button>
        </Link>
        <Button>
          <LoginButton />
        </Button>
      </div>


      <div className="columns-container">
        <div className="sides">
          {/* ---WelcomeBox--- */}
          <div
            className="app welcome"
            children={`Welcome ${isAuthenticated ? user.given_name : ""}`}
          />
          {/* <img className="app" src={`${isAuthenticated ? user.picture : "?"}`}/> */}
          {/* ---HighScoresBox--- */}
          <div className="app large2"> </div>
        </div>
        {/* ---InstructionsBox--- */}
        <div className="app-ins">
          <div className="ins-container">
            <h2>Instructions</h2>
            <p>
              Aliquam pellentesque sodales commodo. Aenean eu interdum enim.
              Aenean at purus rhoncus, mollis est eu, venenatis magna.
              Pellentesque posuere placerat lectus, id aliquam sapien varius
              non. Donec vulputate, orci a iaculis consectetur, ante nulla
              pretium est, quis accumsan risus diam nec ante. Suspendisse dictum
              fermentum
            </p>
          </div>
        </div>
        <div className="sides">
          {/* ---Login/SignupBox--- */}
          <div className="app-large">
            <h2>Please Log in to play</h2>
            <LoginButton id="login-home" className="btn"></LoginButton>
            <a className="privacy" href="#">Privacy Policy</a>
          </div>
          <div className="app">
            {/* ---GameBox--- */}
             {user && <div className="align-vertical">
              Let's get started.
              <br />
              <Link to="/game">
                <Button variant="primary">Start Game</Button>
              </Link>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
}
