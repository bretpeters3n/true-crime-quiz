import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Test from "../Nav-icons/testnavavatar.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../utils/UserContext";
import logo from "../Nav-icons/tcq-logo-flat.png";
import { LoginButton } from "./LoginButton";

export const LoginButtonHome = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return isAuthenticated
      ? <a className="Login-LogoutBtn" onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
      </a>
      
      : <a className="Login-LogoutBtn" onClick={() => loginWithRedirect()}>Log in</a>;

};


function NavTabs({ currentPage, handlePageChange }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Navbar className="nav">
        <Container className="navContainer">
          <Link className="d-inline-block align-top brand" to="/">
            <img
              src={logo}
              width="auto"
              height="50"
              className="d-inline-block align-top brand"
              alt="True Crime Quiz Logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-right">
              {user && <Link className="nav-item" to="/">Home &nbsp;</Link>}
              {user && <Link className="nav-item" to="/addquestion">Add a Question</Link>}
              <NavDropdown
                title={
                  <div className="nav-icon">
                    <img
                      className="thumbnail-img-user"
                      src={`${isAuthenticated ? user.picture : ""}`}
                      onLoad={(event) =>
                        (event.target.style.display = "inline-block")
                      }
                      alt="user pic"
                    />
                    <img
                      className="thumbnail-img"
                      src={`${!isAuthenticated ? Test : ""}`}
                      onError={(event) => (event.target.style.display = "none")}
                      alt="test pic"
                    />
                    &#8964;
                  </div>
                }
                id="basic-nav-dropdown"
              >
                {user && <Link className="dropdown-item" to="/profile">Profile</Link>}
                {user && <Link className="dropdown-item" to="/game">Game</Link>}
                {user && <NavDropdown.Item disabled href="#">Questions</NavDropdown.Item>}
                {user && <NavDropdown.Divider />}
                {/* <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item> */}

                <LoginButtonHome />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;
