
export const getInput = (id, text, type, placeholder, handleChange, handleBlur, values, errors, touched) => (
    <div>
        {text !== null && text.length ? <label htmlFor={id}>{text}</label> : null}
        <input  id={id}
                type={type}
                className={"form-control " + (touched[id] && errors[id] ? 'is-invalid' : touched[id] ? 'is-valid' : '')}
                value={values[id]}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}/>
        {touched[id] && errors[id] && <div className="invalid-feedback" style={{width: '15rem'}}>{errors[id]}</div>}
    </div>
)
