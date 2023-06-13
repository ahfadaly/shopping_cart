import { createContext, useContext, useState } from "react";
import OffcanvasShoppingCart from "../Components/OffcanvasShoppingCart";

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const openCart = () => {
    setIsOpen(true);
  };
  const cloceCart = () => {
    setIsOpen(false);
  };
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setcartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setcartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemCart = (id) => {
    setcartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemCart,
        openCart,
        cloceCart,
        cartQuantity,
      }}
    >
      {children}
      <OffcanvasShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
