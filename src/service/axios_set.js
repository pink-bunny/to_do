import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.56.45.37/api/v1/'
});

let AUTH_TOKEN = function() {
  return 'CekdTYb1zeZEs4PnA1p0uw ';
  // return localStorage.getItem('access-token')
};

instance.defaults.headers.common['access-token'] = AUTH_TOKEN();
instance.defaults.headers.common['client'] = '7-sECuS79KDCKj5grGx0Vw';
instance.defaults.headers.common['uid'] = 'admin@admin.com';

export default instance;
