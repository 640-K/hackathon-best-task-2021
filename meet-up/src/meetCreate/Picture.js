import React from "react";

function picture(id, handleChange, handleBlur, values, errors, touched,setFieldValue) {
        return (
        	<React.Fragment>
                <label  htmlFor={id}>Meeting picture</label>
                <input 
                    className={"form-control " + (touched[id] && errors[id] ? 'is-invalid' : touched[id] ? 'is-valid' : '')}
                    id={id}
                    type="file" 
                    onBlur={handleBlur}
                    accept="image/*"
                    onChange={(event) => {
                        setFieldValue(id, event.currentTarget.files[0]);
                    }}
                />
                {touched[id] && errors[id] && <div className="invalid-feedback">{errors[id]}</div>}
        	</React.Fragment>
        );
}
export default picture;