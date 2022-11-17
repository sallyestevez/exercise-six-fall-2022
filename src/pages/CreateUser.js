import React, { useCallback, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import CreateUserForm from '../components/CreateUserForm';
import Header from '../components/Header';

function CreateUserPage( {setIsLoggedIn, setUserInformation }) {
    const {errors, setErrors} = useState();
    const signUpUser = useCallback(
        // generic argument placeholder (element)
        (e) => {
            e.preventDefault();

            // e.currentTarget -referencing form that exists at the time
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;

            console.log(email, password);

            const auth = getAuth();

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setIsLoggedIn(true);
                    setUserInformation({
                        email: user.email,
                        displayName: user.displayName,
                        uid: user.uid,
                        accessToken: user.accessToken
                    });
                    setErrors();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn({error, errorCode, errorMessage });
                    setErrors(errorMessage);
                    // ..
                });
        },
        [setErrors, setIsLoggedIn, setUserInformation]
    )
    return (
        <>
            <Header setIsLoggedIn setUserInformation/>
            <div className="PageWrapper">
                <h1>Create User</h1>
                <CreateUserForm signUpUser={{signUpUser}}/>
                <p>{errors}</p>
            </div>
        </>
    );
}

export default CreateUserPage;