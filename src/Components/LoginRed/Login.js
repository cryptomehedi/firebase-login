import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => { 
    const [ signInWithEmailAndPassword, user, loading, error, ] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = async e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        await signInWithEmailAndPassword(email, password)
    }

    if(user){
        alert(`Welcome`)
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <h5>Email</h5>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <h5>Password</h5>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default Login;