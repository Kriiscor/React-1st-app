import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/styles/header.css";
import Logo from "../assets/images/Logo.webp";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar className="bg-body-tertiary">
        <Container>
          <NavLink to="/" className={"navbar-brand"}>
            <img
              src={Logo}
              alt="Mexicain avec une guitare"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </NavLink>
          <Nav>
            <NavLink to="/" className={"nav-link"}>
              Accueil
            </NavLink>
            <NavLink to="/a-propos" className={"nav-link"}>
              A propos
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
