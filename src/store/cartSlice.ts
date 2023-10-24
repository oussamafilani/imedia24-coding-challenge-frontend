import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types"; // Define the Product type based on your data structure

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateCartItem: (
      state,
      action: PayloadAction<{ itemId: number; quantity: number }>
    ) => {
      const itemToUpdate = state.items.find(
        (item) => item.id === action.payload.itemId
      );
      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
