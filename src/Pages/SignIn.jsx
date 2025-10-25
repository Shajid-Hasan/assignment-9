import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';
import { IoEyeOff } from 'react-icons/io5';
import { AuthContext } from '../Context/Authentication';

const Signin = () => {
    // const [user, setUser] = useState(null)
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState(null)

    const emailRef = useRef(null)

    const {
        signInWithEmailAndPasswordFunc,
        signInWithEmailFunc,
        signOutUserFunc,
        sendPasswordResetEmailFunc,
        user,
        setUser
    } = useContext(AuthContext)


    const handelSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email?.value
        const password = event.target.password?.value
        console.log('Sign in function entired', { email, password })

        // EMAIL VALIDATION
        const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            toast.error("Email is required");
            return;
        } else if (!emailRegExp.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        // PASSWORD VALIDATION
        const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!password) {
            toast.error("Password is required");
            return;
        } else if (!regExp.test(password)) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }

        // SIGN IN WITH EMAIL & PASSWORD FIREBASE AUTHENTICATION
        signInWithEmailAndPasswordFunc(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                toast.success("Sign in Successfully !")

                // after complete signIn user reach Home page
                // navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Sign In Error !")
            })

    }

    // GOOGLE LOGIN AUTHENTICATION
    const handelGoogleSignIn = () => {

        signInWithEmailFunc()
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
        console.log()
        const email = emailRef.current.value
        sendPasswordResetEmailFunc(email)
            .then(res => {
                toast.success("Chek your email to rset password")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    console.log(user)

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
                                <input type="email" name='email' ref={emailRef} className="input input-bordered w-full bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-pink-400" name='email' placeholder="Email" />
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
                                <Link onClick={handelForgotPassword} onChange={(e) => setEmail(e.target.value)} type='button' value={email} className="link link-hover">Forgot password?</Link>
                            </div>

                            <button className="btn btn-neutral text-white font-bold mt-4 bg-[linear-gradient(-60deg,#ff5858_0%,#f09819_100%)] border-none">LogIn</button>

                            {/* DIVAIDER */}
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
                                <Link to='/signup' className='text-black-500 font-bold underline'>SignUp</Link>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signin;
