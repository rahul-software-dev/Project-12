import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ role }) => {
  const routes = {
    doctor: [
      { path: '/doctor/dashboard', label: 'Dashboard' },
      { path: '/doctor/patients', label: 'Patients' }
    ],
    patient: [
      { path: '/patient/dashboard', label: 'Dashboard' },
      { path: '/patient/prescriptions', label: 'Prescriptions' }
    ]
  };

  return (
    <div className="sidebar">
      <h3>{role.charAt(0).toUpperCase() + role.slice(1)} Panel</h3>
      <ul>
        {routes[role]?.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;