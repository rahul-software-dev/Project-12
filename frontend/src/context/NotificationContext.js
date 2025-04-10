import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const triggerNotification = (msg, type = "info") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <NotificationContext.Provider value={{ notification, triggerNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);