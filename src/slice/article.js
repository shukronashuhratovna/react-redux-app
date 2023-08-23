import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [],
    articleDetail:  null,
    error: null
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticlesStart: state => {
            state.isLoading = true
        },
        getArticleSuccess: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getArticleError: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        getArticleDetailStart: state => {
            state.isLoading = true
        },
        getArticleDetailSuccess: (state, action) => {
            state.isLoading = false
            state.articleDetail = action.payload
        },
        getArticleDetailError: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
    }
    
})

export const { getArticlesStart, getArticleSuccess, getArticleError,
    getArticleDetailStart, getArticleDetailSuccess, getArticleDetailError} = articleSlice.actions
export default articleSlice.reducer