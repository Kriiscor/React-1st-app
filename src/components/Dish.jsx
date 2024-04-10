import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/styles/dish.css";
import { NavLink } from "react-router-dom";
const Dish = ({ name, price, picture , slug}) => {
  return (
    <NavLink to={`/plat/${slug}`}>
      <Card>
        <Card.Img variant="top" src={picture} />
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
