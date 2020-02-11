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

const url = 'https://radar.vdooh.com';
export default new WebClient(url);
