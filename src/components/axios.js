import axios from 'axios';

const instance = axios.create({
  baseUrl: 'http://localhost:5001/clone-16c85/us-central1/api/'
})

export default instance;