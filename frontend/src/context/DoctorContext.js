import React, { createContext, useContext, useState } from "react";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);

  const setDoctorList = (list) => setDoctors(list);

  return (
    <DoctorContext.Provider value={{ doctors, setDoctorList }}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctorContext = () => useContext(DoctorContext);