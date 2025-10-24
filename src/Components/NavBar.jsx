import React from 'react';
import { Link, NavLink } from 'react-router';
import MyContainer from './MyContainer';
import Banner from '../Pages/Banner';
import { auth } from '../assets/Firebase/firebase.config';

const NavBar = () => {
    const user = auth.currentUser;
    const links = (
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'text-white font-bold' : ''} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-white font-bold' : ''} to="/plants">Plants</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-white font-bold' : ''} to="/profile">My Profile</NavLink></li>
        </>
    );

    return (
        <div>
            <MyContainer>
                <div className="navbar bg-[linear-gradient(to_top,#0fd850_0%,#f9f047_100%)] shadow-sm">
                    {/* Navbar Start */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl font-bold text-green-900">GreenNest</a>
                    </div>

                    {/* Navbar Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{links}</ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end flex items-center gap-3">
                        {/* Avatar Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Avatar" src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} />
                                </div>
                            </div>
                            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to='/profile' className="justify-between">Profile</Link>
                                </li>
                                <li>
                                    <Link to='/logout'>Logout</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Sign Up Button */}
                        <Link to="/signup" className="btn bg-[linear-gradient(-60deg,#ff5858_0%,#f09819_100%)] text-white font-bold">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default NavBar;
