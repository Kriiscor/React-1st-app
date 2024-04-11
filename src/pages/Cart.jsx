import React, { useContext } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import useTotalQuantity from "../hooks/useTotalQuantity.jsx";
import useTotalPrice from "../hooks/useTotalPrice.jsx";
import { Helmet } from "react-helmet";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = useTotalQuantity();
  const totalPrice = useTotalPrice();
  return (
    <Container>
      <Helmet>
        <title>Panier</title>
      </Helmet>
      <Row>
        <Col md={12}>
          <h2>Votre Panier</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nom du produit</th>
                <th>Prix</th>
                <th>Quantité</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartDish, index) => (
                <tr key={index}>
                  <td>{cartDish.name}</td>
                  <td>{cartDish.price}€</td>
                  <td>{cartDish.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="text-end">{totalQuantity} éléments dans le panier</p>
          <p className="text-end">Total: {totalPrice}€</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
