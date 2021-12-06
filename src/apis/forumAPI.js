import axios from 'axios';
import store from '../redux/store';

const instance = axios.create({
  baseURL: 'https://forum-backend-ap.herokuapp.com',
  // baseURL: 'http://localhost:8000',
  timeout: 1000,
});

const token = store.getState().auth.authenticated;

if (token) {
  instance.defaults.headers.common.Authorization = `Token ${token}`;
}

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
