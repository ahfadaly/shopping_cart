import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import storeItems from "../data/storeItems.json";

const OffcanvasShoppingCart = ({ isOpen }) => {
  const { cartItems, cloceCart } = useShoppingCart();
  return (
    <>
      <Offcanvas show={isOpen} onHide={cloceCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="d-flex justify-content-end fw-bold fs-5">
            Total : ${" "}
            {cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasShoppingCart;
