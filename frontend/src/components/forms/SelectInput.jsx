import React from 'react';
import './FormInputs.css';

const SelectInput = ({ label, name, value, onChange, options = [], required = false }) => (
  <div className="form-group">
    {label && <label htmlFor={name}>{label}</label>}
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="form-control"
    >
      <option value="">-- Select --</option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value || opt}>
          {opt.label || opt}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;