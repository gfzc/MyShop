import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer } from './reducer/productReducer';
import { authReducer } from './reducer/userReducer';

const reducer= combineReducers ({
    productos: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer
})

//Variable de tipo let que se puede modificar pero no se puede volvel al declarar
let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;