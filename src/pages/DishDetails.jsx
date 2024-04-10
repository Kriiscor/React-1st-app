import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DishDetails () {
  const { slug } = useParams();
  return (
    <Container>
      <Row>
        <Col>
          <h1>Détails du plat avec le slug :{slug}</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default DishDetails;
