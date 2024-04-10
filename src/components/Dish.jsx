import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/styles/dish.css";
import { NavLink } from "react-router-dom";
import { Badge } from "react-bootstrap";
const Dish = ({ name, price, picture, slug, brandnew }) => {
  return (
    <NavLink to={`/plat/${slug}`}>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.ImgOverlay >
          {brandnew === true && <Badge className="position-absolute end-0 translate-middle-x" bg="primary">Nouveau</Badge>}
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
    // <div className="dish">
    //   <h2>{Name}</h2>
    //   <img src={Picture} alt="" />
    //   <h3>{Price}</h3>
    // </div>
  );
};
export default Dish;
