import React, { createContext, useContext, useState } from "react";

const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
  const [uploads, setUploads] = useState([]);

  const addUpload = (file) => setUploads((prev) => [...prev, file]);
  const clearUploads = () => setUploads([]);

  return (
    <UploadContext.Provider value={{ uploads, addUpload, clearUploads }}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUploadContext = () => useContext(UploadContext);