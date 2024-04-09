import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../assets/styles/header.css";
const Header = () => {
  return (
    <header>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
              alt="Mexicain avec une guitare"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Text className="justify-content-end">
            <a href="#home">Accueil</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
