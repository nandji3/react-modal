import React, { useState, useEffect } from 'react';
import { clearRememberedUsername, getRememberedUsername, setRememberedUsername } from '../../services/cookieService';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const savedUsername = getRememberedUsername();
        if (savedUsername) {
            setUsername(savedUsername);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (rememberMe) {
            setRememberedUsername(username);
        } else {
            clearRememberedUsername();
        }

        // ⚡ Send username and password to your API here
        console.log('Logging in', { username, password });

        // 🔒 Password is NEVER saved anywhere locally
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full md:w-[22rem] max-w-lg rounded-lg bg-white/90 p-8 shadow-3xl backdrop-blur-sm"
        >
            <h2 className="mb-6 text-center text-2xl font-bold text-slate-700">
                Login
            </h2>

            {/* Username */}
            <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-slate-600">
                    Username
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-md border border-slate-300 p-2 text-slate-700 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    placeholder="Enter your username"
                    required
                />
            </div>

            {/* Password */}
            <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-slate-600">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-slate-300 p-2 text-slate-700 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                    placeholder="Enter your password"
                    required
                />
            </div>

            {/* Remember Me */}
            <div className="mb-6 flex items-center">
                <input
                    id="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 rounded border-slate-300 accent-teal-800 focus:ring-teal-500"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-slate-600">
                    Remember me
                </label>
            </div>

            {/* Login Button */}
            <button
                type="submit"
                className="w-full  rounded-md bg-teal-500 px-4 py-2 text-white transition hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 text-[0.85rem] cursor-pointer font-semibold tracking-wider block mx-auto"
            >
                Show Modal
            </button>

            {/* Forgot Password */}
            <div className="mt-4 text-center text-sm text-slate-500">
                <a href="/forgot-password" className="hover:underline">
                    Forgot your password?
                </a>
            </div>
        </form>
    );
};

export default LoginForm;
