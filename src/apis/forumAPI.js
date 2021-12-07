import axios from 'axios';
import axiosRetry from 'axios-retry';
import store from '../redux/store';

const instance = axios.create({
  baseURL: 'https://forum-backend-ap.herokuapp.com',
  timeout: 1000,
});

const token = store.getState().auth.authenticated;

if (token) {
  instance.defaults.headers.common.Authorization = `Token ${token}`;
}

instance.defaults.headers.post['Content-Type'] = 'application/json';

axiosRetry(instance, { retries: 3, retryDelay: 1000 });

export default instance;
