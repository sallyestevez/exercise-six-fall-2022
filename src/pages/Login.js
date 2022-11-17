import React from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function LoginPage( {isLoggedIn}) {
    const navigate = useNavigate();

    // if logged in navigate to Home/User Profile
    useEffect(() => {
        if(isLoggedIn) navigate("/");
    }, [isLoggedIn]);

    return (
    <>
        <Header />
        <div className="PageWrapper">
            <h1>Login</h1>
            <LoginForm />
        </div>
    </>
    );
}

export default LoginPage;