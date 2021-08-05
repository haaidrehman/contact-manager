import axios from 'axios';

export let axiosApi = axios.create({
    baseURL: "http://localhost:3006/"
});
