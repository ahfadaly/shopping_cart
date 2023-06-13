import React from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";
import storeItems from "../data/storeItems.json";

const Store = () => {
  return (
    <Row>
      {storeItems.map((item) => (
        <Col lg={4} md={6} key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Store;
