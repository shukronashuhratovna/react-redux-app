import { Input, Textarea } from './'
const Form = (props) => {
    const { title, description, body, setTitle, setDescription, setBody, formSubmit, btnName } = props

    return (
        <form onSubmit={formSubmit}>
            <Input label={'title'} state={title} setState={setTitle} />
            <Textarea label={'description'} state={description} setState={setDescription} />
            <Textarea label={'body'} state={body} setState={setBody} height={'250px'} />

            <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
                {btnName}
            </button>
        </form>
    )
}

export default Form