// src/features/auth/authSaga.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { authenticateUser } from './authService';
import { loginUser, loginUserSuccess, loginUserFailure, logoutUser } from './authSlice';
import { persistor } from '../../app/store';
import axiosInstance from '../../api/axiosInstance';

function* handleLogin(action) {
    try {
        const { username, password } = action.payload;
        const user = yield call(authenticateUser, username, password);
        yield put(loginUserSuccess(user));

        if (user?.token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
        }

    } catch (error) {
        yield put(loginUserFailure(error.message));
    }
}

function* handleLogout() {
    try {
        delete axiosInstance.defaults.headers.common['Authorization'];
        // yield call(removeAuthToken);
        yield call([persistor, persistor.purge]);
    } catch (error) {
        console.error('Error during logout:', error);
    }
}

function* authSaga() {
    yield takeLatest(loginUser.type, handleLogin);
    yield takeLatest(logoutUser.type, handleLogout);
}

export default authSaga;
