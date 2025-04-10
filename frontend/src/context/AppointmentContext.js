import React, { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appt) => setAppointments((prev) => [...prev, appt]);

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointmentContext = () => useContext(AppointmentContext);