import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/styles/header.css";
import Logo from "../assets/images/Logo.webp";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import useTotalQuantity from "../hooks/useTotalQuantity";
const Header = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = useTotalQuantity();
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
            <NavLink to="/panier" className={"nav-link"}>
              Panier ({useTotalQuantity || 0 })
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
