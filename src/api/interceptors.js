import store from '../app/store';
import { logoutUser } from '../feature/auth/authSlice';
import { getAuthToken, removeAuthToken } from '../utils/auth';
export default function applyInterceptors(axiosInstance) {
    // REQUEST Interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = getAuthToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            console.log('🚀 Request:', config.method?.toUpperCase(), config.url);
            return config;
        },
        (error) => {
            console.error('❌ Request error:', error);
            return Promise.reject(error);
        }
    );

    // RESPONSE Interceptor
    axiosInstance.interceptors.response.use(
        (response) => {
            console.log('✅ Response:', response.status, response.config.url);
            return response;
        },
        (error) => {
            const status = error.response?.status;
            console.error('❌ Response error:', status, error.config?.url);

            // Optional: auto-logout or redirect on 401/403
            if (status === 401 || status === 403) {
                removeAuthToken();
                store.dispatch(logoutUser());
                window.location.href = '/login';
            }

            return Promise.reject(error);
        }
    );
}



//---------> Apply to Refresh Token <------------//

// import { getAuthToken, setAuthToken, refreshAuthToken } from '../utils/auth';

// export const applyRequestInterceptor = (axiosInstance) => {
//   // REQUEST Interceptor
//   axiosInstance.interceptors.request.use(
//     (config) => {
//       const token = getAuthToken();
//       if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       console.error('Request error:', error);
//       return Promise.reject(error);
//     }
//   );
// };

// export const applyResponseInterceptor = (axiosInstance) => {
//   // RESPONSE Interceptor
//   axiosInstance.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async (error) => {
//       const originalRequest = error.config;

//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;

//         try {
//           const newToken = await refreshAuthToken();
//           setAuthToken(newToken);
//           originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
//           return axiosInstance(originalRequest);
//         } catch (refreshError) {
//           console.error('Failed to refresh token:', refreshError);
//           window.location.href = '/login';
//           return Promise.reject(refreshError);
//         }
//       }

//       return Promise.reject(error);
//     }
//   );
// };
