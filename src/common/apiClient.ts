import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
});

export default apiClient;
