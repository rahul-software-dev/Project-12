import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

const useProfile = () => {
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    const res = await axios.get("/profile/me");
    setProfile(res.data);
  };

  const updateProfile = async (data) => {
    const res = await axios.put("/profile/update", data);
    setProfile(res.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { profile, updateProfile };
};

export default useProfile;