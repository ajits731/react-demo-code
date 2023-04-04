import { SET_PRODUCTS, SET_USER_DETAILS } from "../constants/reducerConstants";
import axios from "axios";

export function SaveProductsData (products) {
    return {
        type: SET_PRODUCTS, //
        payload: products 
    }
}

export function SaveProductsDataFromApi() {
    return function(dispatch) {
        axios.get('https://fakestoreapi.com/products').then((response) => dispatch({
            type: SET_PRODUCTS,
            payload: response
        }));
    }
}

export function SaveUserDetails(userinfo) {
    return {
        type: SET_USER_DETAILS, 
        payload: userinfo
    }
}