import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.56.45.37/api/v1/'
});

let AUTH_TOKEN = function() {
  return 'LaUDVfTTcfVe9cQEGmfvDg';
  // return localStorage.getItem('access-token')
};

instance.defaults.headers.common['access-token'] = AUTH_TOKEN();
instance.defaults.headers.common['client'] = '9vvTnruJNfu8mantQso63w';
instance.defaults.headers.common['uid'] = 'com@com.com';

export default instance;
