const Textarea = ({ label, state, setState, height = '100px' }) => {
    return (
        <div className="form-floating">
            <textarea
                className="form-control"
                id="floatingTextarea2"
                placeholder={label}
                style={{ height: height, marginTop: '5px' }}
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
            </textarea>
            <label htmlFor="floatingTextarea2">{label}</label>
        </div>
    )
}

export default Textarea