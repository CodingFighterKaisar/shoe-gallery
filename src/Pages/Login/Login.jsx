import { Input } from '@mui/material';
import React, { useContext } from 'react';
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { RiGoogleLine } from "react-icons/ri";

const Login = () => {
    const { UserLogin, GoogleLogin } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        UserLogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(err => {
                const errMsg = err.message;
                console.log(errMsg)
            })
    }


    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(() => { })
            .catch(err => {
                const errMsg = err.message;
                console.log(errMsg)
            })
    }

    return (
        <div className='bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 w-full h-screen flex justify-center items-center'>
            <div className="bg-white p-4 rounded-md">
                <h2 className='text-2xl font-semibold py-4 w-fit font-bold from-[#6366F1] via-[#D946EF] to-[#FB7185] bg-gradient-to-r bg-clip-text text-transparent mx-auto'>Login</h2>
                <form onSubmit={handleLogin} className='flex flex-col justify-center item-center gap-2'>
                    <input type="email" name='email' className='input outline success rounded-md md '
                        placeholder='Email' />
                    <input type="password" name='password' className='input outline success rounded-md md'
                        placeholder='Password' />
                    <button className='bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 py-2 rounded-md text-lg font-semibold'>Login</button>
                </form>

                <p className='text-center mt-4'>Or Sign In Using </p>
                <div className='flex justify-center items-center gap-4 py-4'>
                    <CiFacebook className='text-2xl hover:text-blue-400'></CiFacebook>
                    <CiTwitter className='text-2xl hover:text-blue-400'></CiTwitter>
                    <CiInstagram className='text-2xl hover:text-red-400'></CiInstagram>
                    <RiGoogleLine onClick={handleGoogleLogin} className='text-2xl hover:text-red-400'></RiGoogleLine>
                </div>

                <div className='text-center flex justify-center items-center gap-2 py-6'>
                    <h2>New user?</h2> <span> Please <Link to="/register" className='text-blue-600 font-semibold'>Register</Link></span>
                </div>

            </div>
        </div>
    );
};

export default Login;