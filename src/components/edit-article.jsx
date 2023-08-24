import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleService from '../service/article'
import { getArticleDetailError, getArticleDetailStart, getArticleDetailSuccess } from '../slice/article'
import { Form } from '../ui'
const EditArticle = () => {              //{ article }
    const { slug } = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart())
            try {
                const response = await ArticleService.getArticleDetail(slug)
                setTitle(response.article.title)
                setDescription(response.article.description)
                setBody(response.article.body)
                dispatch(getArticleDetailSuccess(response.article))
            } catch (error) {
                dispatch(getArticleDetailError(error))
            }
        }

        getArticleDetail()

    }, [slug])

    const navigate = useNavigate()


    const formSubmit = async (e) => {
        e.preventDefault()
        const newArticle = { title, description, body }
        try {
            await ArticleService.changeArticle(slug, newArticle)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const formProps = { title, description, body, setTitle, setDescription, setBody, formSubmit, btnName: 'Edit' }
    return (
        <div className="text-center">
            <h1 className="fs-2">Edit article</h1>
            <div className="w-75 mx-auto">
                <Form {...formProps} />
            </div>
        </div>
    )
}

export default EditArticle