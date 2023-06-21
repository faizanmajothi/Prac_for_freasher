import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const newId = action.payload;
      const existingItem = state.items.find(item=>item.id === newId);
      if(existingItem.quantity === 1){
        state.items = state.items.filter(item => item.id !== newId);
      }
      else{
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - state.items[newId].price
      }
    },
  },
});
export const productAction = productSlice.actions;
export default productSlice.reducer;
