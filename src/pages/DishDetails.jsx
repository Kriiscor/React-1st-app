import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dishesData from "../datas/dishes.json";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function DishDetails() {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);
  useEffect(() => {
    const selectedDish = dishesData.find((dish) => dish.slug === slug);
    if (selectedDish) {
      setDish(selectedDish);
    }
  }, [slug]);
  if (!dish) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Le plat demandé n'existe pas.</h1>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <img src={dish.picture} alt={dish.slug} />
            </Col>
            <Col>
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              <p>{dish.price}€</p>
              <Button variant="primary">Commander</Button>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default DishDetails;
