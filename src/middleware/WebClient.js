import axios from 'axios';
// import store from '@/store';
// import router from '@/router';

class WebClient {
  constructor(baseURL) {
    this.baseURL = baseURL;

    this.$store = null;
    this.$router = null;

    this.axios = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      withCredentials: false,
    });

    this.setInterceptors();
  }

  setInterceptors() {
    this.axios.interceptors.response.use(null, error => {
      const {
        status,
        config,
      } = error.response;

      if (config) {
        if (status === 401 && config.url !== 'account/users') {
          this.$store.dispatch('notification/set', {
            message: 'Нет прав доступа',
            type: 'error',
          });
          this.$router.back();
        }
        else if (status === 403) {}
      }
      return Promise.resolve(error.response);
    });
  }

  login(token) {
    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    this.axios.defaults.headers.common['Content-Type'] = 'application/json';
    this.axios.defaults.headers['content-type'] = 'application/json';
  }
  logout() {
    delete this.axios.defaults.headers.common['Authorization'];
    this.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  get(url, params) {
    return this.axios.get(url, {
      params,
    });
  }
  post(url, data, params) {
    return this.axios.post(url, data, {
      params,
    });
  }
  put(url, data, params) {
    return this.axios.put(url, data, {
      params,
    });
  }
  delete(url, data, params) {
    return this.axios.delete(url, {
      params,
      data,
    });
  }
  request(url, config) {
    return this.axios.request({
      url,
      ...config
    });
  }
};

const url = 'https://mayak-reality.com/v1/api';
// const url = 'https://localhost:44388/api';
export default new WebClient(url);
