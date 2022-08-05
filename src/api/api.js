// 參考 https://medium.com/i-am-mike/%E4%BD%BF%E7%94%A8axios%E6%99%82%E4%BD%A0%E7%9A%84api%E9%83%BD%E6%80%8E%E9%BA%BC%E7%AE%A1%E7%90%86-557d88365619

import axios from 'axios';
import baseURL from '../baseUrl'

const apiRequest = axios.create({ baseURL })

export const apiUserLogin = data => apiRequest.post('/login/login', data);
