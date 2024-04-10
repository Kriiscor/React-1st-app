import React from "react";
import Dish from "../components/Dish";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const dishes = [
    {
      id: 1,
      name: "Tacos à l’unité",
      price: "3€",
      picture:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      slug: "tacos-a-l-unite",
      brandnew : true ,
    },
    {
      id: 2,
      name: "Enchiladas",
      price: "12€",
      picture:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      slug: "enchiladas",
      brandnew : false,
    },
    {
      id: 3,
      name: "Mole poblano",
      price: "15€",
      picture:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      slug: "mole-poblano",
      brandnew : false,
    },
  ];
  return (
    <Container>
      <Row>
        {dishes.map((dish) => (
          <Col key={dish.id}>
            <Dish
              name={dish.name}
              price={dish.price}
              picture={dish.picture}
              slug={dish.slug}
              brandnew={dish.brandnew}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
