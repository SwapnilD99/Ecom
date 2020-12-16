import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:5001/ecommwebsite-5d309/us-central1/api"
});

export default instance;