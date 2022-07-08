import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';
import { useNavigate, useLocation } from 'react-router-dom';

const Reg = () => {
    const [ createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const location = useLocation()
    const from = location.state?.from?.pathname || "/profile";
    const navigate = useNavigate()


    const handleSubmit = async e => {
        e.preventDefault();

        const displayName = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirm = e.target.ConfirmPassword.value
        if(displayName.length > 0 && email.length > 0 && password.length > 0){
            if(password === confirm) {
                await createUserWithEmailAndPassword(email, password)
                await updateProfile({displayName})
                toast.success(`welcome ${displayName}`)
            }else{
                alert('password did not match')
            }
        } else{
            alert('field empty')
        }
    }
    if(user){
        navigate(from, { replace: true })
    }

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <h5>Name</h5>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <h5>Email</h5>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <h5>Password</h5>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <h5>Confirm Password</h5>
                    <input type="password" name="ConfirmPassword" id="ConfirmPassword" />
                </div>
                <input type="submit" value="Sign Up" />
                {
                    error && <p>{error.message.slice(17, error.message.length-1)}</p>
                }
                {
                    loading && <Spinner/>
                }
            </form>
        </div>
    );
};

export default Reg;