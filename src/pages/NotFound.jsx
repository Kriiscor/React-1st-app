import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
        <h1>404 - Page Not Found</h1>
        <p>Désolé la page que vous cherchez n'éxiste pas</p>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
