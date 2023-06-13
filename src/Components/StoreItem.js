import React from "react";
import { Card, Button } from "react-bootstrap";
import style from "../styles/Card.module.css";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = ({ id, price, title, description, image }) => {
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemCart } = useShoppingCart();
  const quantity = getItemsQuantity(id);

  return (
    <Card className={style.card}>
      <Card.Img src={image} variant="top" />
      <Card.Body>
        <Card.Title className={style.price}>
          <h5 className="m-0">{title.split("", 20)}</h5>
          <h6 className="fw-bold text-danger fs-5">{price}</h6>
        </Card.Title>
        <p>{description.split("", 40)}</p>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} className="w-100">
              Add To Cart
            </Button>
          ) : (
            <div>
              <div className={style.quantity}>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <h5>{quantity} in cart</h5>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeItemCart(id)} className="btn btn-danger w-100">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
