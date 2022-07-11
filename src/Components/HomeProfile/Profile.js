import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Your Name: {user?.displayName}</h2>
            <h4>Your Email: {user?.email}</h4>
        </div>
    );
};

export default Profile;