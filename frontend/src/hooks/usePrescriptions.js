import axios from "../utils/axiosInstance";

const usePrescriptions = () => {
  const fetch = (patientId) => axios.get(`/prescriptions/${patientId}`);
  const create = (data) => axios.post("/prescriptions/create", data);
  const update = (id, data) => axios.put(`/prescriptions/${id}/update`, data);
  const remove = (id) => axios.delete(`/prescriptions/${id}`);

  return { fetch, create, update, remove };
};

export default usePrescriptions;