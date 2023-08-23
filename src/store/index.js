import { configureStore } from "@reduxjs/toolkit";
import ArticleSlice from "../slice/article";
import AuthReducer from '../slice/auth'

export default configureStore({
    reducer: {
        auth: AuthReducer,
        article: ArticleSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
})