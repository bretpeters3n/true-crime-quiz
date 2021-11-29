import * as React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {LoginButton} from './LoginButton';
import {useAuth0} from '@auth0/auth0-react';

export default function Homepage() {

  const {user, isAuthenticated} = useAuth0();
 

  return (
    <>
      <div className="columns-container">
        <div className="sides">
          {/* ---WelcomeBox--- */}
          <div className="app" children={`Welcome ${isAuthenticated ? user.name : ""}`}/>
          {/* <img className="app" src={`${isAuthenticated ? user.picture : "?"}`}/> */}
          {/* ---HighScoresBox--- */}
          <div className="app large2">HighScores</div>
        </div>
        {/* ---InstructionsBox--- */}
        <div className="app-ins">
          <h2>Instructions</h2>
          <p>
            Aliquam pellentesque sodales commodo. Aenean eu interdum enim.
            Aenean at purus rhoncus, mollis est eu, venenatis magna.
            Pellentesque posuere placerat lectus, id aliquam sapien varius non.
            Donec vulputate, orci a iaculis consectetur, ante nulla pretium est,
            quis accumsan risus diam nec ante. Suspendisse dictum fermentum
            felis eget lobortis. Phasellus pharetra nisi eros, a imperdiet nisi
            sollicitudin vel. Nullam id lacinia augue. Ut lacinia leo a diam
            congue scelerisque. Cras vehicula a velit ac ultrices.
          </p>
        </div>
        <div className="sides">
          {/* ---Login/SignupBox--- */}
          <div className="app large">
          <LoginButton />
          </div>
          <div className="app">
            {/* ---GameBox--- */}
            <div className="align-vertical">
              Let's get started.
              <br />
              <Link to="/game">
                <Button variant="primary">Start Game!</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
