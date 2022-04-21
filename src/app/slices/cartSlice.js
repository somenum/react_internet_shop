import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, data) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === data.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempGood = { ...data.payload, cartQuantity: 1 };
        state.cartItems.push(tempGood);
      }
      toast.success(`You have successfully added the item to your cart `);
    },
    removeFromCart: (state, data) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== data.payload.id
      );
      toast.success("You have successfully remove the item from your cart");
    },
    removeAll: (state) => {
      state.cartItems = [];
      toast.success("Your order has been accepted");
    },
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;
export const selectCart = (state) => state.cart.cartItems;
export default cartSlice.reducer;
