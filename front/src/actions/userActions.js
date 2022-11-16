import axios from "axios"

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from "../constants/userConstants"

//Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/login', {email, password}, config)

        dispatch({
            type:LOGIN_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type:LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

//REGISTRAR USUARIO
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })

        const config={
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const {data} = await axios.post('/api/usuario/registro', userData, config)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

//CARGAR EL USUARIO (LOAD USER)
export const loadUser=()=> async(dispatch) =>{
    try{
        dispatch({type: LOAD_USER_REQUEST})
        const {data} = await axios.get("/api/me")
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    }catch(error){
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

//logout User
export const logout = () => async (dispatch)=>{
    try{
        await axios.get("/api/logout")
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    } catch(error){
        dispatch({
            type:LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

//Clear error
export const clearErrors = () => async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}