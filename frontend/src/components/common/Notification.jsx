import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      {message}
      <button onClick={onClose}>×</button>
    </div>
  );
};

export default Notification;