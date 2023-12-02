import React, { useContext, useState } from 'react';
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { user, createUser } = useContext(AuthContext)
    const [registeredUser, setregisteredUser] = useState("")
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.uName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(userName, password, email)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setregisteredUser(user)
            })
            .catch(err => {
                const errMsg = err.message;
                console.log(errMsg)
            })


    }
    return (
        <div className='bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 w-full h-screen flex justify-center items-center '>
            <div className=" bg-white p-8 rounded-md">
                <h2 className='text-2xl font-semibold py-4 w-fit font-bold from-[#6366F1] via-[#D946EF] to-[#FB7185] bg-gradient-to-r bg-clip-text text-transparent mx-auto'>Register</h2>
                <form onSubmit={handleRegister} className='flex flex-col justify-center item-center gap-2'>
                    <input type="text" name='uName' className='input outline success rounded-md md'
                        placeholder='User Name' />
                    <input type="email" name='email' className='input outline success rounded-md md '
                        placeholder='Email' />
                    <input type="password" name='password' className='input outline success rounded-md md'
                        placeholder='Password' />
                    <button className='bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 py-2 rounded-md text-lg font-semibold'>Register</button>
                </form>

                <p className='text-center mt-4'>Or Sign Up Using </p>
                <div className='flex justify-center items-center gap-4 py-4'>
                    <CiFacebook className='text-2xl hover:text-blue-400'></CiFacebook>
                    <CiTwitter className='text-2xl hover:text-blue-400'></CiTwitter>
                    <CiInstagram className='text-2xl hover:text-red-400'></CiInstagram>
                </div>

                <div className='text-center flex justify-center items-center gap-2 py-6'>
                    <h2>Already Have an account?</h2> <span> Please <Link to="/login" className='text-blue-600 font-semibold'>Login</Link></span>
                </div>

            </div>
        </div>
    );
};

export default Register;