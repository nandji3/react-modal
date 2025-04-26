import Cookies from 'js-cookie';

const COOKIE_OPTIONS = {
    expires: 7,
    secure: true,
    sameSite: 'Strict',
};

export const setRememberedUsername = (username) => {
    Cookies.set('rememberedUsername', username, COOKIE_OPTIONS);
    Cookies.set('rememberMe', true, COOKIE_OPTIONS);
};

export const getRememberedUsername = () => {
    const username = Cookies.get('rememberedUsername');
    const rememberMe = Cookies.get('rememberMe') === 'true';
    return rememberMe ? username : '';
};

export const clearRememberedUsername = () => {
    Cookies.remove('rememberedUsername');
    Cookies.remove('rememberMe');
};
