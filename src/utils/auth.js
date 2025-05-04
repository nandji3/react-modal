import axiosInstance from "../api/axiosInstance";

export const getAuthToken = () => {
    return localStorage.getItem('authToken');  // Get token from localStorage
};

export const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem('authToken', token);  // Set token in localStorage
    } else {
        localStorage.removeItem('authToken');  // Remove token from localStorage
    }
};

export const refreshAuthToken = async () => {
    try {
        const response = await axiosInstance.post('/auth/refresh', {}, { withCredentials: true });
        return response.data.accessToken;  // Return the new token
    } catch (error) {
        console.error('Refresh token failed', error);
        throw error;
    }
};
