import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import { useNavigate } from 'react-router';

function LoginPage({ isLoggedIn, setIsLoggedIn, setUserInformation }) {
    const navigate = useNavigate();

    // if logged in navigate to Home/User Profile
    useEffect(() => {
        if (isLoggedIn) navigate("/");
    }, [isLoggedIn]);

    return (
    <>
        <Header 
            setIsLoggedIn={setIsLoggedIn} 
            setUserInformation={setUserInformation}
        />
        <div className="PageWrapper">
            <h1>Login</h1>
            <LoginForm />
        </div>
    </>
    );
}

export default LoginPage;