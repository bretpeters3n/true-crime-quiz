import * as React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Homepage() {
  return (
    <>
      <div className="columns-container">
        <div className="app">
          <div className="align-vertical">
            Let's get started.
            <br />
            <Link to="/game">
              <Button variant="primary">Start Game!</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
