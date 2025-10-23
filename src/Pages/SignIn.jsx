import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../assets/Firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { IoEyeOff } from 'react-icons/io5';

const Signin = () => {

    const [show, setShow] = useState(false)

    const navigate = useNavigate();
    const handelSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email?.value
        const password = event.target.password?.value
        console.log('Sign in function entired', { email, password })

        // SIGN IN WITH EMAIL & PASSWORD FIREBASE AUTHENTICATION
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Sign in Successfully !")
                // after complete signIn user reach Home page
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Sign In Error !")
            })

        // IMPLEMENT PASSWORD VALIDATION
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !isValidLength) {
            toast.error("Password must be at least 6 characters, with uppercase and lowercase letters.");
            return;
        }
    }

    // GOOGLE LOGIN AUTHENTICATION
    const handelGoogleSignIn = () => {

        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                toast.success("User LogIn Successfully !")

            })
            .catch(error => {
                console.log(error.message)
                toast.error('Error SignUp !')
            })
    }

    // FORGOT PASSWORD
    const handelForgotPassword = () => {
        sendPasswordResetEmail(auth, email)
    }
    return (
        <>
            <div className="bg-[linear-gradient(-60deg,#16a085_0%,#f4d03f_100%)] p-3 rounded-2xl w-full m-auto mt-15 max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl text-center font-bold">Sign In</h1>
                <div className="card-body">
                    <form onSubmit={handelSignIn}>
                        <fieldset className="fieldset">
                            {/* USER EMAIL */}
                            <div>
                                <label className="label">Email</label>
                                <input type="email" className="input input-bordered w-full bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-pink-400" name='email' placeholder="Email" />
                            </div>

                            {/* USER PASSWORD */}
                            <div className="relative">
                                <label className="block text-sm font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                                <span
                                    onClick={() => setShow(!show)}
                                    className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                                >
                                    {show ? <FaEye /> : <IoEyeOff />}
                                </span>
                            </div>

                            {/* FORGOT PASSWORD */}
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>

                            <button className="btn btn-neutral text-white font-bold mt-4 bg-[linear-gradient(-60deg,#ff5858_0%,#f09819_100%)] border-none">LogIn</button>
                            {/* Divider */}
                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="h-px w-16 bg-white/30"></div>
                                <span className="text-sm text-white">or</span>
                                <div className="h-px w-16 bg-white/30"></div>
                            </div>

                            {/* GOOGLE SIGN IN */}
                            <div className='flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer'>
                                <span><FaGoogle /></span>
                                <Link onClick={handelGoogleSignIn}>
                                    Signup with Google</Link>
                            </div>
                            {/* DON'T HAVE AN ACCOUNT */}
                            <div className='flex justify-center gap-2 mt-3'>
                                <a className="link link-hover">Don't have an account ?</a>
                                <Link to='/signUp' className='text-black-500 font-bold underline'>SignUp</Link>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signin;
