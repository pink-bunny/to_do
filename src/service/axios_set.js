import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.56.45.37/api/v1/'
});

let AUTH_TOKEN = function() {
  return 'dYdRQduywxO2zRAl1i0kSw ';
  // return localStorage.getItem('access-token')
};

instance.defaults.headers.common['access-token'] = AUTH_TOKEN();
instance.defaults.headers.common['client'] = 'hSwiMe2VyRpY0AQWzf2qFA';
instance.defaults.headers.common['uid'] = 'admin@admin.com';

export default instance;
