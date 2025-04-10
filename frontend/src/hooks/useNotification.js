import { useCallback } from "react";
import { toast } from "react-toastify";

const useNotification = () => {
  const notify = useCallback((message, type = "info") => {
    toast[type](message);
  }, []);

  return notify;
};

export default useNotification;