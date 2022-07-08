import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Nav = () => {
    const [user] = useAuthState(auth)
    const margine = {marginLeft: '10px'}
    return (
        <div>
            <Link style={margine} to='/'>Home</Link>
            <Link style={margine} to='/profile'>Profile</Link>
            
            {
                user ? <button style={margine} onClick={() =>signOut(auth)}>sign out</button> : <>
                    <Link style={margine} to='/reg'>Reg</Link>
                    <Link style={margine} to='/login'>Login</Link>
                </>
            }
            
        </div>
    );
};

export default Nav;