import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);