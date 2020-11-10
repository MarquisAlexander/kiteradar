import axios from 'axios';

const api = axios.create({
    baseURL: 'http://pontitos.com.br/api',
});

export default api;