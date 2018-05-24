import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.56.45.37/api/v1/'
});

let AUTH_TOKEN = function() {
  return 'yTaQN0i2kq-ZXWAPcmtxJA';
  // return localStorage.getItem('access-token')
};

instance.defaults.headers.common['access-token'] = AUTH_TOKEN();
instance.defaults.headers.common['client'] = 'Ieh40mYK2wYxiCl2zVEpJg';
instance.defaults.headers.common['uid'] = 'com@com.com';

export default instance;
