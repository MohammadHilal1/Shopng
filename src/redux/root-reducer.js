import { combineReducers } from "redux"
import cartReducer from "./cart/cart.reducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./user/user.reducer"
import directoryReducer from "./directory/directoryReducer"
import shopReducer from "./shop/shop.reducer"

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)