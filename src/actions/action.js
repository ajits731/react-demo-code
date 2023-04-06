import { SET_PRODUCTS, SET_USER_DETAILS } from "../constants/reducerConstants";
import axios from "axios";

export function SaveProductsData (products) {
    return {
        type: SET_PRODUCTS, //
        payload: products 
    }
}



export const SaveProductsDataFromApi = () => { 
    return function(dispatch) {
        axios.get('http://localhost:3001/getCustomProducts').then((response) => dispatch({
            type: SET_PRODUCTS,
            payload: response.data.products
        }));
    }
}

export function SaveUserDetails(userinfo) {
    return {
        type: SET_USER_DETAILS, 
        payload: userinfo
    }
}