import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Test from "../Nav-icons/testnavavatar.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../utils/UserContext";
import logo from "../Nav-icons/tcq-logo-flat.png";


function NavTabs({ currentPage, handlePageChange }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <Navbar bg="light">
      <Container className="navContainer">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="auto"
            height="50"
            className="d-inline-block align-top"
            alt="True Crime Quiz Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-right">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addquestion">Add a Question</Nav.Link>
            <NavDropdown
              title={
                <div className="nav-icon">
                  <img
                    className="thumbnail-img"
                    src={`${!isAuthenticated ? Test : ""}`}
                    onError={(event) => (event.target.style.display = "none")}
                    alt="test pic"
                  />
                  <img
                    className="thumbnail-img-user"
                    src={`${isAuthenticated ? user.picture : ""}`}
                    onLoad={(event) =>
                      (event.target.style.display = "inline-block")
                    }
                    alt="user pic"
                  />
                  &#8964;
                </div>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/game">Game</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
