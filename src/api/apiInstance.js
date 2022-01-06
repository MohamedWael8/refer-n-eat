import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  authorization: process.env.REACT_APP_AUTHORIZATION_TOKEN,
});

export default instance;
