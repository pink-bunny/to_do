import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.56.45.37/api/v1/'
});

let AUTH_TOKEN = function() {
  return 'yInDCQvtD0pL6RL-dlmWyQ';
  // return localStorage.getItem('access-token')
};

instance.defaults.headers.common['access-token'] = AUTH_TOKEN();
instance.defaults.headers.common['client'] = '7CFBw-Y1twSw8gjYH7-Jng';
instance.defaults.headers.common['uid'] = 'admin@admin.com';

export default instance;
