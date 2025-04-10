import React, { createContext, useContext, useState } from "react";

const PrescriptionContext = createContext();

export const PrescriptionProvider = ({ children }) => {
  const [prescriptions, setPrescriptions] = useState([]);

  const addPrescription = (presc) => setPrescriptions((prev) => [...prev, presc]);

  return (
    <PrescriptionContext.Provider value={{ prescriptions, addPrescription }}>
      {children}
    </PrescriptionContext.Provider>
  );
};

export const usePrescriptionContext = () => useContext(PrescriptionContext);