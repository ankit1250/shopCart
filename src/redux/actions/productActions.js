import axios from "axios"
import { ActionTypes } from "../constants/action-type"
import fakeStoreApi from "../../apis/fakeStoreApi"


export const fetchProducts=()=>{
    return async function (dispatch,getState){
        const response = await fakeStoreApi('/products')
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
    }
}

export const fetchProductDetails=(id)=>{
    return async function(dispatch,getState){
        const response = await fakeStoreApi(`/products/${id}`)
        dispatch({type:ActionTypes.FETCH_PRODUCT_DETAILS,payload:response})
    }
}


export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProducts=(products)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products
    }
}