import axios from "axios";

const BASE_URL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(BASE_URL).then((response) => response.data);
};

const create = (newPerson) => {
  return axios.post(BASE_URL, newPerson).then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

const personService = { getAll, create, remove };

export default personService;
