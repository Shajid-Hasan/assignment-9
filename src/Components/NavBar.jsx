import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import MyContainer from './MyContainer';
import { AuthContext } from '../Context/Authentication';
import { toast } from 'react-toastify';

const NavBar = () => {
    const { user, setUser, signOutUserFunc } = useContext(AuthContext);
    console.log(user);

    // SIGNOUT
    const handelSignOut = () => {
        signOutUserFunc()
            .then(() => {
                setUser(null);
                toast.success("User signed out successfully!");
            })
            .catch(error => toast.error(error.message));
    };

    const links = (
        <>
            <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-white font-bold' : '')} to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-white font-bold' : '')} to="/plants">
                    Plants
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-white font-bold' : '')} to="/profile">
                    My Profile
                </NavLink>
            </li>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
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
                        {user ? (
                            <div className="dropdown dropdown-end">
                                {/* Profile Image */}
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 h-13 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                        <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="User" />
                                    </div>
                                </label>

                                {/* Dropdown content */}
                                <ul
                                    tabIndex={0}
                                    className="mt-3 p-3 shadow menu menu-compact dropdown-content bg-white rounded-box w-64 text-black"
                                >
                                    <li className="mb-2 text-center">
                                        <h2 className="text-xl font-bold">{user?.displayName || "No Name"}</h2>
                                        <p className="text-sm">{user?.email}</p>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handelSignOut}
                                            className="btn w-full bg-red-500 hover:bg-red-600 text-white font-bold"
                                        >
                                            Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link
                                to="/signin"
                                className="btn bg-[linear-gradient(-60deg,#ff5858_0%,#f09819_100%)] text-white font-bold"
                            >
                                LogIn
                            </Link>
                        )}
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default NavBar;



{/* <div className="w-full max-w-md mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-2xl rounded-3xl p-10 text-center text-white">
    <img
        src={user?.photoURL || "https://via.placeholder.com/150"}
        alt="User"
        className="h-32 w-32 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl"
    />
    <h2 className="text-3xl font-bold mb-2">{user?.displayName || "No Name"}</h2>
    <p className="text-lg mb-6">{user?.email}</p>
    <button
        onClick={handelSignOut}
        className="btn bg-white text-red-500 font-bold hover:bg-gray-100 hover:text-red-600 transition-colors px-8 py-3 rounded-full text-lg"
    >
        Sign Out
    </button>
</div> */}