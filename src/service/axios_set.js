import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.56.45.37/api/v1/'
});

// let AUTH_TOKEN = function() {
//   return localStorage.getItem('access-token');
// };

instance.defaults.headers.common['access-token'] = 'bxA1R5IYR6FYrQPdKHApDg';
instance.defaults.headers.common['client'] = 'KC1BK-RmTaPtLtfN8yy-gQ';
instance.defaults.headers.common['uid'] = 'admin@admin.com';

export default instance;
