import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Nav = () => {
    const [user] = useAuthState(auth) 
    return (
        <div className='flex justify-center mt-2'>
            <Link className='mx-2 p-2 duration-150 hover:bg-green-400 rounded-xl hover:text-white' to='/'>Home</Link>
            <Link className='mx-2 p-2 duration-150 hover:bg-green-400 rounded-xl hover:text-white' to='/profile'>Profile</Link>
            
            {
                user ? <button className='mx-2 p-2  rounded-xl bg-gradient-to-r from-slate-400 to-red-300 hover:text-white duration-150 hover:from-red-300 hover:to-red-600' onClick={() =>signOut(auth)}>sign out</button> : <>
                    <Link className='mx-2 p-2 duration-150 hover:bg-green-400 rounded-xl hover:text-white' to='/reg'>Registration</Link>
                    <Link className='mx-2 p-2 duration-150 hover:bg-green-400 rounded-xl hover:text-white' to='/login'>Login</Link>
                </>
            }
            
        </div>
    );
};

export default Nav;