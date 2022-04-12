import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart : (state, data) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item._id === data.payload._id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempGood = {...data.payload, cartQuantity : 1};
                state.cartItems.push(tempGood);
            }
        },
        removeFromCart : (state, data) => {
            state.cartItems = state.cartItems.filter(item => item._id !== data.payload._id);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCart = state => state.cart.cartItems;
export default cartSlice.reducer;

