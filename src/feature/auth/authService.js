import axiosInstance from '../../api/axiosInstance';

export const authenticateUser = async (username, password) => {
    try {
        const response = await axiosInstance.post('/login', { username, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'An error occurred during login');
    }
};