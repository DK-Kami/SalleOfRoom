import axios from 'axios';

class WebClient {
  constructor(baseURL) {
    this.baseURL = baseURL;

    this.axios = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    });

    this.setInterceptors();
  }

  setInterceptors() {
    this.axios.interceptors.response.use(null, error => {
      if (error.response && error.response.config && (error.response.status === 401 || error.response.status === 403)) {
        return router.push({ name: "login" });
      }
      return Promise.resolve(error.response);
    });
  }

  login(token) {
    this.axios.defaults.headers.common['Authorization'] = token;
  }
  logout() {
    delete this.axios.defaults.headers.common['Authorization'];
  }

  get(url, params) {
    return this.axios.get(url, {
      params,
    })
  }
  post(url, data, params) {
    return this.axios.post(url, data, {
      params,
    })
  }
  put(url, data, params) {
    return this.axios.put(url, data, {
      params,
    })
  }
  delete(url, data, params) {
    return this.axios.delete(url, {
      params,
      data,
    })
  }
  request(url, config) {
    return this.axios.request({
      url,
      ...config
    });
  }
};

const url = 'https://localhost:44388/';
export default new WebClient(url);
