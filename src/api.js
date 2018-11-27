import axios from 'axios';

const api = axios.create({
  baseURL: 'https://secret-earthworm.glitch.me/',
});

// 로그인 이후 자동적으로 요청에 토큰을 포함시키는 코드
api.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
});

export default api;
