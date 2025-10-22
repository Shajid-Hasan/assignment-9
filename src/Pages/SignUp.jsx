import React from 'react';
import MyContainer from '../Components/MyContainer';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../assets/Firebase/firebase.config';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';

const Signup = () => {
    const navigate = useNavigate()
    // USER SIGN UP 
    const handelSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name?.value
        const email = event.target.email?.value
        const photo = event.target.photo?.value
        const password = event.target.password?.value
        console.log('Signup function entired', { name, email, photo, password })

        // SIGN UP FIREBASE AUTHENTICATION
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Sign Up Successful !')
                // after complete signup user reach Home page
                navigate('/')
            })
            .catch(error => {
                console.log('Sign Up Faild', error.message)
                toast.error('Error SignUp !')
            })
    }

    return (
        <>
            <MyContainer>
                <div className="hero bg-[linear-gradient(-60deg,#16a085_0%,#f4d03f_100%)] mt-10">
                    <div className="hero-content gap-15 flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-[#471396]">Sign Up</h1>
                            <p className="py-6">
                                Discover a lush indoor paradise with our carefully curated plants and expert care tips. Transform your home or office into a green sanctuary where every leaf brings life, freshness, and serenity.
                            </p>
                        </div>
                        <div className="card bg-[linear-gradient(to_top,#b3ffab_0%,#12fff7_100%)] w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handelSignUp}>
                                    <fieldset className="fieldset">
                                        {/* USER NAME */}
                                        <label className="label">Name</label>
                                        <input type="text" className="input" name='name' placeholder="Name" />
                                        {/* UERS EMAIL */}
                                        <label className="label">Email</label>
                                        <input type="email" className="input" name='email' placeholder="Email" />
                                        {/* USER PHOTO */}
                                        <label className="label">Photo</label>
                                        <input type="text" className="input" name='photo' placeholder="Photo Link" />
                                        {/* USER PASSWORD */}
                                        <label className="label">Password</label>
                                        <input type="password" className="input" name='password' placeholder="Password" />
                                        {/* FORGOT PASSWORD
                                    <div><a className="link link-hover">Forgot password?</a></div> */}
                                        <button className="btn btn-neutral mt-4 bg-[linear-gradient(-60deg,#ff5858_0%,#f09819_100%)] border-none">Register</button>
                                        {/* ALREADY HAVE AN ACCOUNT */}
                                        <div className='flex justify-center gap-2'>
                                            <a className="link link-hover">Already have an account ?</a>
                                            <Link to='/signin' className='text-blue-500 font-bold underline'>SignIn</Link>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </>
    );
};

export default Signup;