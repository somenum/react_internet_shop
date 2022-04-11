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
            console.log(data)
        },
        removeFromCart : (state, data) => {
            const newCartItems = state.cartItems.filter(item => item._id !== data.payload._id);
            state.cartItems = newCartItems;
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCart = state => state.cart.cartItems;
export default cartSlice.reducer;

