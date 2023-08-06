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
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
