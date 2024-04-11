import React, { useContext } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2>Votre Panier</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nom du produit</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartDish ,  index) => (
                <tr key={index}>
                  <td>{cartDish.name}</td>
                  <td>{cartDish.price}€</td>
                  <td>{cartDish.quantity}</td>
                  <td>
                    <Button variant="danger">Supprimer</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
