import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addToCart, removeFromCart, updateCartItem } from "../store/cartSlice";
import { Product } from "../types";

export const useShoppingCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const addItemToCart = (item: Product) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const updateItemInCart = (itemId: number, quantity: number) => {
    dispatch(updateCartItem({ itemId, quantity }));
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemInCart,
    getTotalCartItems,
  };
};
