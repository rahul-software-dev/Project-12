import React from 'react';
import './FormInputs.css';

const TextInput = ({ label, name, value, onChange, placeholder, required = false, type = 'text' }) => (
  <div className="form-group">
    {label && <label htmlFor={name}>{label}</label>}
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="form-control"
    />
  </div>
);

export default TextInput;