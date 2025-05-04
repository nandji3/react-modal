import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { persistReducer } from 'redux-persist';
import authReducer from '../feature/auth/authSlice'

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['posts', 'auth'],
};


const rootReducer = combineReducers({
    auth: authReducer,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

