<!-- import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => { 
  return (
    <React.Fragment>
        <Header />
        <main className="py-3">
          <Container>
      <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route path="/product/:id" element={<ProductScreen/>} />
      </Routes>
          </Container>
        </main>
        <Footer />
    </React.Fragment>
  );
};

export default App; -->

<!-- import React from 'react'
// import { Link } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
// import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {

    const product = products.find((p) => p._id === match.params.id)
    
    return <div>{product.name}</div>
    
}

export default ProductScreen 

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './bootstrap.min.css'
import './index.css';
import App from './App';
 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
); -->

    <!-- <>
      <Link className="btn btn-dark my-3 " to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image fluid src={products.image} alt={products.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{products.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>

            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </> -->