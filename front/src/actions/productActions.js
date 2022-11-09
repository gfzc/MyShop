import axios from 'axios';
import {
    ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL, 
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS__SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS} from '../constants/productConstants';

export const getProducts = (currentPage =1, keyword=''/*,precio*/) => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        //let link=`/api/productos?keyword=${keyword}&page=${currentPage}&precio[gte]=${precio[0]}&precio[lte]=${precio[1]}`
        //const {data} = await axios.get(link)
        const {data} = await axios.get(`/api/productos?keyword=${keyword}&page=${currentPage}`)


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
export const getProductDetails = (id) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/producto/${id}`)

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

