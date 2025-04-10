import { useState } from "react";
import axios from "../utils/axiosInstance";

const useUpload = () => {
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("/uploads", formData, {
      onUploadProgress: (e) => {
        setProgress(Math.round((e.loaded * 100) / e.total));
      },
    });

    setUploadedUrl(res.data.url);
    return res.data.url;
  };

  return { progress, uploadedUrl, uploadFile };
};

export default useUpload;