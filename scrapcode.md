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

<!-- const products = [
    {
        name: "RECTANGLE PEACOAT IN WOOL NAVY",
        image: "/images/image-4.jpeg",
        description: "90% WOOL 10% POLYAMIDE - MIDDLE BACK VENT - 6 CELINE-ENGRAVED HORN BUTTONS - CLASSIC FIT",
        brand: "CELINE",
        category: "Men's Winter Wear",
        price: "2,450",
        countInStock: "5",
        availableSizes: ["XS", "S", "M", "L"],
        rating: 3.0,
        numReviews: 3,
    },
    {
        name: "RECTANGLE PEACOAT IN WOOL NAVY",
        image: "/images/image-4.jpeg",
        description: "90% WOOL 10% POLYAMIDE - MIDDLE BACK VENT - 6 CELINE-ENGRAVED HORN BUTTONS - CLASSIC FIT",
        brand: "CELINE",
        category: "Men's Winter Wear",
        price: "2,450",
        countInStock: "0",
        availableSizes: ["XS", "S", "M", "L"],
        rating: 4.0,
        numReviews: 12,
    },
    {
        name: "RECTANGLE PEACOAT IN WOOL NAVY",
        image: "/images/image-4.jpeg",
        description: "90% WOOL 10% POLYAMIDE - MIDDLE BACK VENT - 6 CELINE-ENGRAVED HORN BUTTONS - CLASSIC FIT",
        brand: "CELINE",
        category: "Men's Winter Wear",
        price: "2,450",
        countInStock: "5",
        availableSizes: ["XS", "S", "M", "L"],
        rating: 5.0,
        numReviews: 10,
    },
    {
        name: "RECTANGLE PEACOAT IN WOOL NAVY",
        image: "/images/image-4.jpeg",
        description: "90% WOOL 10% POLYAMIDE - MIDDLE BACK VENT - 6 CELINE-ENGRAVED HORN BUTTONS - CLASSIC FIT",
        brand: "CELINE",
        category: "Men's Winter Wear",
        price: "2,450",
        countInStock: "5",
        availableSizes: ["XS", "S", "M", "L"],
        rating: 3.0,
        numReviews: 9,
    },
    {
        name: "RECTANGLE PEACOAT IN WOOL NAVY",
        image: "/images/image-4.jpeg",
        description: "90% WOOL 10% POLYAMIDE - MIDDLE BACK VENT - 6 CELINE-ENGRAVED HORN BUTTONS - CLASSIC FIT",
        brand: "CELINE",
        category: "Men's Winter Wear",
        price: "2,450",
        countInStock: "5",
        availableSizes: ["XS", "S", "M", "L"],
        rating: 3.5,
        numReviews: 3,
    },
    {
        name: "RECTANGLE PEACOAT IN WOOL NAVY",
        image: "/images/image-4.jpeg",
        description: "90% WOOL 10% POLYAMIDE - MIDDLE BACK VENT - 6 CELINE-ENGRAVED HORN BUTTONS - CLASSIC FIT",
        brand: "CELINE",
        category: "Men's Winter Wear",
        price: "2,450",
        countInStock: "5",
        availableSizes: ["XS", "S", "M", "L"],
        rating: 4.0,
        numReviews: 7,
    },
    {
        name: "RECTANGLE PEACOAT IN WOOL NAVY",
        image: "/images/image-4.jpeg",
        description: "90% WOOL 10% POLYAMIDE - MIDDLE BACK VENT - 6 CELINE-ENGRAVED HORN BUTTONS - CLASSIC FIT",
        brand: "CELINE",
        category: "Men's Winter Wear",
        price: "2,450",
        countInStock: "5",
        availableSizes: ["XS", "S", "M", "L"],
        rating: 5.0,
        numReviews: 11,
    },
    {
        name: "RECTANGLE PEACOAT IN WOOL NAVY",
        image: "/images/image-4.jpeg",
        description: "90% WOOL 10% POLYAMIDE - MIDDLE BACK VENT - 6 CELINE-ENGRAVED HORN BUTTONS - CLASSIC FIT",
        brand: "CELINE",
        category: "Men's Winter Wear",
        price: "2,450",
        countInStock: "5",
        availableSizes: ["XS", "S", "M", "L"],
        rating: 2.0,
        numReviews: 16,
    },
]

export default products -->

<!-- import React, { useState, useEffect } from "react";
import axios from "axios";
// import products from "../products";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  // const match = useParams();
  // const product = products.find((p) => p._id === match.id);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `/api/products/${encodeURIComponent(id)}`
      );

      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Link className="btn btn-light rounded mb-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            className="rounded"
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem as="div">
              <Rating
                text={`${product.numReviews}reviews`}
                value={product.rating}
              />
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>Item Description:</ListGroupItem>
            <ListGroupItem>${product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="w-100 rounded"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen; -->


<!-- //REDUX VERSION

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductsDetails } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  // const match = useParams();
  // const orderID = match.params.id
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // const { id } = useParams();
  useEffect(() => {
    dispatch(listProductsDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-light rounded mb-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              className="rounded"
              src={product.image}
              alt={product.name}
              fluid
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem as="div">
                <Rating
                  text={`${product.numReviews}reviews`}
                  value={product.rating}
                />
              </ListGroupItem>
              <ListGroupItem>Price: ${product.price}</ListGroupItem>
              <ListGroupItem>Item Description:</ListGroupItem>
              <ListGroupItem>${product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Button
                    className="w-100 rounded"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen; -->