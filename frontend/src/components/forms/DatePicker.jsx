import React from 'react';
import './FormInputs.css';

const DatePicker = ({ label, name, value, onChange, required = false }) => (
  <div className="form-group">
    {label && <label htmlFor={name}>{label}</label>}
    <input
      type="date"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="form-control"
    />
  </div>
);

export default DatePicker;