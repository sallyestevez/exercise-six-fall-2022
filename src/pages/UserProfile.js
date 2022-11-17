import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function UserProfilePage({ isLoading, isLoggedIn, userInformation }) {
    const navigate = useNavigate();

    // if not logged in & not loading navigate to login page
    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate("/login");
    }, [isLoading, isLoggedIn]);

    return (
        <>
            <Header />
            <div className="PageWrapper">
                <h1>User Profile</h1>
                <p>
                    <strong>Display Name: </strong>
                    {userInformation.displayName}
                </p>
                <p>
                    <strong>Email: </strong>
                    {userInformation.email}
                </p>
                <p>
                    <strong>User ID</strong>
                    {userInformation.id}
                </p>
            </div>
        </>
    );
}

export default UserProfilePage;