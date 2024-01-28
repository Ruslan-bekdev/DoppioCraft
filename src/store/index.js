import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import coffeeReducer from "./coffeeSlice";

const store = configureStore({
    reducer:{
        coffeeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
});

export default store;