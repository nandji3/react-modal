import axios from 'axios';
import applyInterceptors from './interceptors';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

applyInterceptors(axiosInstance);

export default axiosInstance;



// -----------> Use with Refresh Token <----------- //

// import axios from 'axios';
// import { applyRequestInterceptor, applyResponseInterceptor } from './interceptors';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',  // API base URL
//   withCredentials: true,  // Send cookies with each request (if using cookies for auth)
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// applyRequestInterceptor(axiosInstance);
// applyResponseInterceptor(axiosInstance);

// export default axiosInstance;

