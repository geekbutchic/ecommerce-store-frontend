import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product';
import products from "../products";

//LOOP THROUGH ALL PRODUCTS AND OUTPUT EACH ONE
const HomeScreen = () => {
  return (
    <>
      <h4>Latest Products</h4>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;