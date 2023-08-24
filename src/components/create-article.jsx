import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../service/article'
import { Form } from '../ui'
const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()
        const newArticle = { title, description, body }
        try {
            await ArticleService.postArticle(newArticle)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const formProps = { title, description, body, setTitle, setDescription, setBody, formSubmit, btnName: 'Create' }
    return (
        <div className="text-center">
            <h1 className="fs-2">Create article</h1>
            <div className="w-75 mx-auto">
                <Form {...formProps} />
            </div>
        </div>
    )
}

export default CreateArticle