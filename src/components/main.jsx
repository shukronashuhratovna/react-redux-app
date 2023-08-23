import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArticleService from '../service/article';
import { getArticlesStart, getArticleSuccess } from '../slice/article';
import { Loader } from '../ui';

const Main = () => {
    const { articles, isLoading } = useSelector(state => state.article)
    const { user, loggedIn } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getArticles = async () => {
        dispatch(getArticlesStart())
        try {
            const response = await ArticleService.getArticles()
            dispatch(getArticleSuccess(response.articles))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getArticles()
    }, [])

    const deleteArticle = async slug => {
        try {
            await ArticleService.deleteArticle(slug)
            getArticles()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="album py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {isLoading && <Loader />}
                    {articles.map(item => (
                        <div className="col" key={item.id}>
                            <div className="card h-100 shadow-sm">
                                <svg className="bd-placeholder-img card-img-top"
                                    width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"></rect>
                                </svg>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <p className="card-text m-0 fw-bold">{item.title}</p>
                                        <p className="card-text mb-2">{item.description}</p>
                                    </div>
                                    <div className='card-text'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onClick={() => navigate(`/article/${item.slug}`)} className="btn btn-sm btn-outline-success">View</button>
                                                {loggedIn && user.username === item.author.username &&
                                                    <>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                        <button type="button" onClick={() => deleteArticle(item.slug)} className="btn btn-sm btn-outline-danger">Delete</button>
                                                    </>
                                                }
                                            </div>
                                            <small className="text-body-secondary fw-bold text-capitalize">{item.author.username}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Main