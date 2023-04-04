import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./productReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
    product: ProductReducer,
    userData: UserReducer
});

export default rootReducer;