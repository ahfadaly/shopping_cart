import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/storeItems.json";

const CartItem = ({ id, quantity }) => {
  const { removeItemCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center border-bottom mb-3 pb-2">
      <img src={item.image} alt="cart-img" style={{ width: "80px", height: "80px", objectFit: "contain" }} />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "1rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          $ {item.price}
        </div>
        <div>$ {item.price * quantity}</div>
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => removeItemCart(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
