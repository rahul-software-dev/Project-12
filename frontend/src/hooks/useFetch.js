import { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(url, options);
        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;