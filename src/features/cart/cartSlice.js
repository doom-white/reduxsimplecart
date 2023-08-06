import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },

    increaseItemCount: (state, action) => {
      const cartItem = state.cartItems.find((i) => i.id === action.payload);
      cartItem.quantity++;
    },

    decreaseItemCount: (state, action) => {
      const cartItem = state.cartItems.find((i) => i.id === action.payload);
      cartItem.quantity > 0 && cartItem.quantity--;
    },
    calculateTotal: (state) => {
      let total = 0,
        quantity = 0;

      state.cartItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });

      state.total = total;
      state.quantity = quantity;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseItemCount,
  decreaseItemCount,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
