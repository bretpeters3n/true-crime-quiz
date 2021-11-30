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
    <div>
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


      {/* <div className="banner"></div> */}
      <div className="columns-container">
        <div className="sides">
          {/* ---WelcomeBox--- */}
          <div
            className="app welcome"
            children={`Welcome Detective ${isAuthenticated ? user.given_name : ""} 🕵🏼‍♂️`}
          />
          {/* <img className="app" src={`${isAuthenticated ? user.picture : "?"}`}/> */}
          {/* ---HighScoresBox--- */}
          <div className="app large2"> </div>
        </div>
        {/* ---InstructionsBox--- */}
        <div className="app-ins">
          <div className="ins-container">
            <h2>Game Instructions</h2>
            <p>
              Do you think of yourself as a detective?<br></br>
              Then try solve these questions!<br></br>
              The quiz will run through 5 questions pertaining to true crime and true crime content. <br></br>
              Click the Start Game button to start answering crime questions!
            </p>
            <hr></hr>
            <h2>Think you know True Crime?</h2>
            <p>Then log in to add, edit or delete your own questions!</p><br></br>
            {/* <Link to="/addquestion">
                <Button variant="primary">Click to Add Questions</Button>
              </Link> */}
          </div>
        </div>
        <div className="sides">
          {/* ---Login/SignupBox--- */}
          <div className="app-large">
            <h2>Please Log in to Play</h2>
            <LoginButton id="login-home" className="btn"></LoginButton>
            <a className="privacy" href="#">Privacy Policy</a>
          </div>
          {user && <div className="app">
            {/* ---GameBox--- */}
             <div className="align-vertical">
              Let's get started.
              <br />
              <Link to="/game">
                <Button variant="primary">Start Game</Button>
              </Link>
            </div>
          </div>}
        </div>
          {/* <div className="team"> </div> */}
      </div>
        {/* <footer>this is a test</footer> */}
    </div>
  );
}
