import axios from 'axios';
import { environment } from './environment';
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: 'https://your-story-server.herokuapp.com/api/v1/',
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = environment.token;

// Also add/ configure interceptors && all the other cool stuff

instance.interceptors.response.use(
  (response) => {
    // console.log(response.data);
    // Edit response config
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
