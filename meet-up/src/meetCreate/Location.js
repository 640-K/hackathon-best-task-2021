import React from "react";
import Autocomplete from "react-google-autocomplete";

function location(id, handleChange, handleBlur, values, errors, touched,setFieldValue) {
        return (
        	<React.Fragment>
        		<label htmlFor={values[id]}>Address</label>
                <Autocomplete
                    className={"form-control " + (touched[id] && errors[id] ? 'is-invalid' : touched[id] ? 'is-valid' : '')}
                    id={id}
                    value={values[id]}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    apiKey="AIzaSyBYk_tBce7iUGtPHfh03AmWCw9kktWvVuo"
                    onPlaceSelected={(place) => 
                        setFieldValue(id, place.formatted_address)
                    }
                    onChange={handleChange}
                />
                {touched[id] && errors[id] && <div className="invalid-feedback">{errors[id]}</div>}
        	</React.Fragment>
        );
}
export default location;