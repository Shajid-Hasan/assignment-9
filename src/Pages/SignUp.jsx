import React, { useState } from 'react';
import MyContainer from '../Components/MyContainer';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // ✅ NEW: imported updateProfile
import { auth } from '../assets/Firebase/firebase.config';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';

const Signup = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    // USER SIGN UP 
    const handelSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name?.value;
        const email = event.target.email?.value;
        const photo = event.target.photo?.value;
        const password = event.target.password?.value;

        // ✅ password validation
        const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regExp.test(password)) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }

        // ✅ CREATE ACCOUNT
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log("User created:", user);

                // ✅ Update profile info (name + photo)
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        toast.success('Sign Up Successful & Profile Updated!');
                        navigate('/profile'); // ✅ move user to Profile page
                    })
                    .catch((error) => {
                        console.log("Profile update failed:", error.message);
                        toast.error("Profile update failed!");
                    });
            })
            .catch(error => {
                console.log('Sign Up Failed:', error.message);
                toast.error('Error Sign Up!');
            });
    };

    return (
        <MyContainer>
            <div className="hero bg-[linear-gradient(-60deg,#16a085_0%,#f4d03f_100%)] mt-10">
                <div className="hero-content gap-15 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#471396]">Sign Up</h1>
                        <p className="py-6">
                            Discover a lush indoor paradise with our carefully curated plants and expert care tips.
                            Transform your home or office into a green sanctuary where every leaf brings life, freshness, and serenity.
                        </p>
                    </div>

                    <div className="card bg-[linear-gradient(to_top,#b3ffab_0%,#12fff7_100%)] w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handelSignUp}>
                                <fieldset className="fieldset">
                                    {/* USER NAME */}
                                    <div>
                                        <label className="label">Name</label>
                                        <input type="text" className="input input-bordered w-full bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-pink-400" name='name' placeholder="Name" />
                                    </div>

                                    {/* USER EMAIL */}
                                    <div>
                                        <label className="label">Email</label>
                                        <input type="email" className="input input-bordered w-full bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-pink-400" name='email' placeholder="Email" />
                                    </div>

                                    {/* USER PHOTO */}
                                    <div>
                                        <label className="label">Photo</label>
                                        <input type="text" className="input input-bordered w-full bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-pink-400" name='photo' placeholder="Photo Link" />
                                    </div>

                                    {/* PASSWORD */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium mb-1">Password</label>
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

                                    {/* REGISTER BUTTON */}
                                    <button type="submit" className="btn btn-neutral mt-4 bg-[linear-gradient(-60deg,#ff5858_0%,#f09819_100%)] border-none">
                                        Register
                                    </button>

                                    {/* ALREADY HAVE ACCOUNT */}
                                    <div className='flex justify-center gap-2 mt-2'>
                                        <span>Already have an account?</span>
                                        <Link to='/signin' className='text-blue-500 font-bold underline'>SignIn</Link>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MyContainer>
    );
};

export default Signup;
