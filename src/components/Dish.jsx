import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/styles/dish.css";
const Dish = ({ Name, Price, Picture }) => {
  return (
      <Card>
        <Card.Img variant="top" src={Picture} />
        <Card.Body>
          <Card.Text>{Name}</Card.Text>
          <Card.Text>{Price}</Card.Text>
        </Card.Body>
      </Card>
    // <div className="dish">
    //   <h2>{Name}</h2>
    //   <img src={Picture} alt="" />
    //   <h3>{Price}</h3>
    // </div>
  );
};
export default Dish;
