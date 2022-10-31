import axios from 'axios';
import {
    ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL, 
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS__SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS} from '../constants/productConstants';

export const getProducts = () => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        const {data} = await axios.get('api/productos')

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })

    }

}

//Ver detallee producto
export const getProductsDatail = (id) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`api/productos/:${id}`)

        dispatch({
            type: PRODUCT_DETAILS__SUCCESS,
            payload: data.product
        })
    }catch(error){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })

    }
}
//Clear error
export const clearError = () => async(dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}

