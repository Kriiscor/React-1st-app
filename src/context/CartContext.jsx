import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (Dish) => {
    setCart((prevCart) => {
      const existingDish = prevCart.find((cartDish) => cartDish.id === Dish.id);
      if (existingDish) {
        return prevCart.map((cartDish) =>
          cartDish.id === Dish.id
            ? { ...cartDish, quantity: cartDish.quantity + 1 }
            : cartDish
        );
      } else {
        return [...prevCart, { ...Dish, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
