import React from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";
import { useState, useEffect } from "react";

const Store = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const getCategories = () => {
    fetch(`${url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const categoriesUI = categories.map((link) => {
    return (
      <button key={link} className="btn btn-primary" onClick={() => filtterCategories(link)}>
        {link}
      </button>
    );
  });

  const filtterCategories = (CatName) => {
    fetch(`${url}/category/${CatName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  return (
    <Row>
      <div className="d-flex flex-md-row flex-column gap-3 mt-4">
        <button className="btn btn-primary" onClick={() => getProducts()}>
          all
        </button>
        {categoriesUI}
      </div>
      {products.map((item) => (
        <Col lg={4} md={6} key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Store;
