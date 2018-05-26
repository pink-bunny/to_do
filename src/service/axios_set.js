import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.56.45.37/api/v1/'
});

let AUTH_TOKEN = function() {
  return 'xxrdqBN3cGLKPC4FRfU4hQ';
  // return localStorage.getItem('access-token')
};

instance.defaults.headers.common['access-token'] = AUTH_TOKEN();
instance.defaults.headers.common['client'] = 'Ahd7pr433-0eyi96ENiw_Q';
instance.defaults.headers.common['uid'] = 'admin@admin.com';

export default instance;
