import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const useRoleRedirect = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "doctor") navigate("/doctor/dashboard");
    else if (user?.role === "patient") navigate("/patient/dashboard");
    else if (user?.role === "admin") navigate("/admin/dashboard");
  }, [user]);
};

export default useRoleRedirect;