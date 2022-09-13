import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "./user/userReducer";
import cartVisibilityReducer from "./cart/cartVisibilityReducer";

const logger = createLogger()

const middlewares = [logger]

const store = configureStore({
    reducer:{
        user: userReducer,
        cartVisibility: cartVisibilityReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:['payload.createdAt'],
            ignoredActionPaths:['payload.createdAt'],
            ignoredPaths:['user.currentUser.createdAt']
        }
    }).concat(middlewares)
})

export default store