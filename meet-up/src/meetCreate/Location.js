import React from "react";
import Autocomplete from "react-google-autocomplete";
import config from '../data/config.json'

const location = (id, handleChange, handleBlur, values, errors, touched, setFieldValue, label=false) => (
    <React.Fragment>
        {label ? <label htmlFor={values[id]}>Address</label> : null}
        <Autocomplete
            className={"form-control " + (touched[id] && errors[id] ? 'is-invalid' : touched[id] ? 'is-valid' : '')}
            id={id}
            value={values[id]}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            apiKey={config.apiKeys.googleMaps}
            onPlaceSelected={place => setFieldValue(id, place.formatted_address)}
            onChange={handleChange}/>
        {touched[id] && errors[id] && <div className="invalid-feedback">{errors[id]}</div>}
    </React.Fragment>
);

export default location;
