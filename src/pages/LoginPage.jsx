import LoginForm from "../components/LoginForm/LoginForm";
import loginBg from '../assets/login-bg.jpg';

const LoginPage = () => {
    return (
        <div
            className="flex min-h-screen items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${loginBg})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-teal-900 opacity-40"></div>

            {/* Centered Login Form */}
            <div className="relative z-10">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
