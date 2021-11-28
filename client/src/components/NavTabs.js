import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Test from "../Nav-icons/testnavavatar.jpg"


function NavTabs({ currentPage, handlePageChange }) {
  return (
<Navbar bg="light">
  <Container className="navContainer">
    <Navbar.Brand href="/">true crime quiz</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-right">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/addquestion">Add a Question</Nav.Link>
        <NavDropdown title={ <div className="nav-icon"><img className="thumbnail-img" src={Test} alt="user pic" />&#8964;</div>} id="basic-nav-dropdown">
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