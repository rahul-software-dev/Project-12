import React from 'react';
import './FormInputs.css';

const RadioGroup = ({ label, name, options = [], selectedValue, onChange, required = false }) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <div className="radio-group">
      {options.map((option, index) => (
        <label key={index} className="radio-label">
          <input
            type="radio"
            name={name}
            value={option.value || option}
            checked={selectedValue === (option.value || option)}
            onChange={onChange}
            required={required}
          />
          {option.label || option}
        </label>
      ))}
    </div>
  </div>
);

export default RadioGroup;