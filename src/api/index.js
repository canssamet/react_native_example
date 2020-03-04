import axios from 'axios';

const baseURL = 'https://cat-fact.herokuapp.com';

const instance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
});

const getToken = () => {
  const token = '12124askdnjn12j3123';
  return { token };
};

instance.interceptors.request.use(
  async config => {
    const { token } = await getToken();
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log(config)
    return config;
  },
  error => Promise.reject(error)
);

export default instance;
