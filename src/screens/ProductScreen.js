import React, { useState, useEffect } from "react";
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

export default ProductScreen;
