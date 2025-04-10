import React, { createContext, useContext, useState } from "react";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  const setPatientList = (list) => setPatients(list);

  return (
    <PatientContext.Provider value={{ patients, setPatientList }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatientContext = () => useContext(PatientContext);