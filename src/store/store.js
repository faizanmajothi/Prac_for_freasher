import { configureStore } from "@reduxjs/toolkit";
import cartShowSliceReducer from "./cartShow-slice";
import productSliceReducer from "./product-slice";
const store = configureStore({
    reducer:{
        cartShow:cartShowSliceReducer,
        product: productSliceReducer
    }
})
export default store;