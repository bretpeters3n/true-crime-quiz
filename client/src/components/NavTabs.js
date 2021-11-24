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
    <Navbar.Brand href="/">𝕋𝕣𝕦𝕖 ℂ𝕣𝕚𝕞𝕖 ℚ𝕦𝕚𝕫</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-right">
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link> */}
        <NavDropdown title={ <div className="nav-icon"><img className="thumbnail-img" src={Test} alt="user pic" />&#8964;</div>} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something cool</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Some lame thing</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">𝒻𝒶𝓃𝒸𝓎 things</NavDropdown.Item>
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