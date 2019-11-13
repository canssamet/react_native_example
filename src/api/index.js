import axios from 'axios';

const baseURL = 'https://cat-fact.herokuapp.com';

const api = axios.create({
  baseURL
});

export default api;
