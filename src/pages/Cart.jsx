import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const Cart = ({ cart }) => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h2>Votre Panier</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nom du produit</th>
                                <th>Description</th>
                                <th>Prix</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}€</td>
                                    <td><Button variant="danger">Supprimer</Button></td>
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