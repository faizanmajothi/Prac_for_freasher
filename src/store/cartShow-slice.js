import {createSlice} from "@reduxjs/toolkit";

const initialState = {isCartShow:false}
const cartShowSlice = createSlice({
    name:"cartShow",
    initialState,
    reducers:{
        showCart(state){
            state.isCartShow = !state.isCartShow
        }
    }
});

export const cartShowAction = cartShowSlice.actions;
export default cartShowSlice.reducer;