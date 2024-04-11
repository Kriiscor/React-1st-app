import React from "react";
import Dish from "../components/Dish";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import dishesData from "../datas/dishes.json";

function Home() {
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [dishes, setDishes] = useState([]);
  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
  };
  useEffect(() => {
    const filteredDishes = showNewOnly
      ? dishesData.filter((dish) => dish.isNew)
      : dishesData;
    setDishes(filteredDishes);
  }, [showNewOnly]);
  

  return (
    <Container>
      <Button variant="primary" onClick={handleShowNewOnly}>
        {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
      </Button>
      <Row>
        {dishes.length > 0 &&
          dishes.map((dish) => (
            <Col xs={4} key={dish.id}>
              <Dish
                name={dish.name}
                price={dish.price}
                picture={dish.picture}
                slug={dish.slug}
                isNew={dish.isNew}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Home;
