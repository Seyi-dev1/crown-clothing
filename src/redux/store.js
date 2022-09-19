import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

const logger = createLogger()

const combinedReducers = combineReducers({
    user: userReducer,
    cart: cartReducer
})

const middlewares = [logger]

const store = configureStore({
    reducer:combinedReducers,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:['payload.createdAt'],
            ignoredActionPaths:['payload.createdAt'],
            ignoredPaths:['user.currentUser.createdAt']
        }
    }).concat(middlewares)
})

export default store