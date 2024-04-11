import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";

const useTotalQuantity = () => {
  const { cart } = useContext(CartContext);
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    let totalQuantity = 0;
    cart.forEach((dish) => {
      totalQuantity += dish.quantity;
    });
    setTotalQty(totalQuantity);
  }, [cart]);

  return totalQty;
};

export default useTotalQuantity;
