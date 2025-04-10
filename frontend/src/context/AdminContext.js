import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminLogs, setAdminLogs] = useState([]);

  const addLog = (log) => setAdminLogs((prev) => [...prev, log]);

  return (
    <AdminContext.Provider value={{ adminLogs, addLog }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);