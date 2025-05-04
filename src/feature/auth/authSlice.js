
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    status: 'idle', // Status of the login process (idle, pending, complete, failed)
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        loginUser(state) {
            state.status = 'pending';
        },

        loginUserSuccess(state, action) {
            state.user = action.payload;
            state.error = null;
            state.status = 'complete';
        },

        loginUserFailure(state, action) {
            state.user = null;
            state.error = action.payload;
            state.status = 'failed';
        },

        logoutUser(state) {
            state.user = null;
            state.status = 'idle';
            state.error = null;
        },

    },
});

export const {
    loginUser,
    loginUserSuccess,
    loginUserFailure,
    logoutUser,
} = authSlice.actions;

export default authSlice.reducer;