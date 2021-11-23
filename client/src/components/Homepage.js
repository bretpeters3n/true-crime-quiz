import * as React from "react";
// import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

export default function Homepage() {
  return (
    <>
      <div className="columns-container">
        <div className="app">
          <div className="align-vertical">
            Let's get started.
            <br />
            <Button variant="contained">Start Game!</Button>
          </div>
        </div>
      </div>
    </>
  );
}
