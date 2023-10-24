import React from "react";
import { useShoppingCart } from "../hooks/useShoppingCart";

const ShoppingCart: React.FC = () => {
  const { cartItems, removeItemFromCart, updateItemInCart } = useShoppingCart();

  console.log("cartItems", cartItems);
  if (cartItems.length === 0) {
    return <div>Your shopping cart is empty.</div>;
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateItemInCart(item.id, parseInt(e.target.value, 10))
              }
            />
          </li>
        ))}
      </ul>
      <div className="cart-total">Total Price: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default ShoppingCart;
