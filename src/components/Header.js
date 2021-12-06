import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

//RAFCE - REACT ARROW FUNCTION EXPORT
const Header = () => {
  return (
    <header>
      <Navbar bg="black" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/"><i className="fab fa-pushed"></i>{" "}BENVENUTO A NERO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className="fab fa-opencart"></i>{" "}CART</Nav.Link>
            <Nav.Link href="/login"><i class="fas fa-user-circle"></i>{" "}SIGN IN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

