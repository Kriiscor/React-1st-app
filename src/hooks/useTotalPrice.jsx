import { useContext }  from 'react';
import { CartContext } from '../context/CartContext.jsx';

const useTotalPrice = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  return totalPrice;
};

export default useTotalPrice;