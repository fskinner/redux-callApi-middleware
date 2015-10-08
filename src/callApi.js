import axios from 'axios';

function callApi(endpoint, method, data, payload) {
  const requestOptions = {
    url: endpoint,
    method,
    data
  }

  return axios(requestOptions)
    .then(response => {
      if(response.status < 200 || response.status >= 300) {
        return Promise.reject(response);
      }

      if(typeof response.data !== 'object' && payload) {
        return {
          message: response.data,
          payload
        };
      }

      return {
        message: response.statusText,
        payload: response.data
      }
    });
}

export default callApi;
