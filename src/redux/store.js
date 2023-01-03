import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import shopCollectionsReducer from "./shop-collections/shopCollectionsReducer";
import { FLUSH, PERSIST, persistReducer, persistStore, PURGE, REHYDRATE, REGISTER, PAUSE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import paymentReducer from "./payment/paymentReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas/rootSaga";

const logger = createLogger()

const saga = createSagaMiddleware()


const middlewares = [saga]

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const combinedReducers = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shopCollections:shopCollectionsReducer,
    payment:paymentReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  }

  const persistedReducer = persistReducer(persistConfig, combinedReducers)


const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE],
            ignoredActionPaths:['payload.createdAt','payload'],
            ignoredPaths:['user.currentUser.createdAt', 'firebase', 'firestore', 'payload']
        }
    }).concat(middlewares)
})

 saga.run(rootSaga)

export const persistor = persistStore(store)


export default store