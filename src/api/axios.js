import axios from 'axios'
import {BASE_API_URL} from './const.js'

export const publicRequester = axios.create({
  baseURL: BASE_API_URL,
})

/* This is for authorized JSON requests */
const privateRequester = axios.create({
  baseURL: BASE_API_URL,
});

privateRequester.interceptors.request.use((config) => {
  return config;
})

privateRequester.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      return Promise.reject(error);

      return error.response
    }
)


/* This is for authorized MULTIPART FORM DATA requests (FILE UPLOADS) */
export const multipartRequester = axios.create({
  baseURL: BASE_API_URL,
})
multipartRequester.interceptors.request.use((config) => {
  config.headers["Content-Type"] = 'multipart/AppForm-data'
  return config;
});



export default privateRequester