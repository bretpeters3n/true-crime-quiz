import * as React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Homepage() {
  return (
    <>
      <div className="columns-container">
        <div className="sides">
          <div className="app">
            <div className="align-vertical">
              Let's get started.
              <br />
              <Link to="/game">
                <Button variant="primary">Start Game!</Button>
              </Link>
            </div>
          </div>
          <div className="app large2"></div>
        </div>
          <div className="app-ins"><h2>Instructions</h2><p>Aliquam pellentesque sodales commodo. Aenean eu interdum enim. Aenean at purus rhoncus, mollis est eu, venenatis magna. Pellentesque posuere placerat lectus, id aliquam sapien varius non. Donec vulputate, orci a iaculis consectetur, ante nulla pretium est, quis accumsan risus diam nec ante. Suspendisse dictum fermentum felis eget lobortis. Phasellus pharetra nisi eros, a imperdiet nisi sollicitudin vel. Nullam id lacinia augue. Ut lacinia leo a diam congue scelerisque. Cras vehicula a velit ac ultrices.</p></div>
        <div className="sides">
          <div className="app large">Login/Signup</div>
          <div className="app"></div>
          </div>
      </div>
    </>
  );
}
