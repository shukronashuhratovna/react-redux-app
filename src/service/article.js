import axios from "axios";

const ArticleService = {
    async getArticles() {
        const {data} = await axios.get('/articles') 
        return data
    },
    async getArticleDetail(slug) {
        const {data} = await axios.get(`/articles/${slug}`)
        return data
    },
    async postArticle(article) {
        const {data} = await axios.post(`/articles`, {article})
        return data 
    },
    async changeArticle(slug, article) {
        const {data} = await axios.put(`/articles/${slug}`, {article})
        return data 
    },
    async deleteArticle(slug) {
        await axios.delete(`/articles/${slug}`)
    },
}

export default ArticleService