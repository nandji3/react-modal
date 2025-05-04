import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/auth/authSlice';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
