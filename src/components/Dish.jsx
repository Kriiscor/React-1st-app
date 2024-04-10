import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/styles/dish.css";
import { NavLink } from "react-router-dom";
import { Badge } from "react-bootstrap";
const Dish = ({ name, price, picture, slug, isNew }) => {
  return (
    <NavLink to={`/plat/${slug}`}>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.ImgOverlay >
          {isNew  && <Badge className="position-absolute end-0 translate-middle-x" bg="primary">Nouveau</Badge>}
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
};
export default Dish;
