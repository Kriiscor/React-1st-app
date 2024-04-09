import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/styles/header.css";
import Logo from '../assets/images/Logo.webp';
const Header = () => {
  return (
    <header>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              alt="Mexicain avec une guitare"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Accueil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
