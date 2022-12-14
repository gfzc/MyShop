import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer, newProductReducer, productReducer } from './reducer/productReducer';
import { authReducer, userReducer, forgotPasswordReducer } from './reducer/userReducer';
import { cartReducer } from './reducer/cartReducer';
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from './reducer/orderReducer';


const reducer= combineReducers ({
    productos: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    forgotPassword: forgotPasswordReducer,
    newProduct: newProductReducer,
    product: productReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
})

//Variable de tipo let que se puede modificar pero no se puede volvel al declarar
let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],

        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}    
    }

}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;