import axios from "../utils/axiosInstance";

const useAppointment = () => {
  const book = (data) => axios.post("/appointments/book", data);
  const cancel = (id) => axios.delete(`/appointments/${id}`);
  const fetchAll = () => axios.get("/appointments");

  return { book, cancel, fetchAll };
};

export default useAppointment;