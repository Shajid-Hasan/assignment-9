import React from "react";
import { auth } from "../assets/Firebase/firebase.config";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        console.log("Logout")
        signOut(auth)
            .then(() => {
                toast.success("Logged out successfully!");
                navigate("/signin");
            })
            .catch((error) => {
                console.log(error.message);
                toast.error("Logout failed!");
            });
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <p className="text-lg font-medium">Are you sure you want to logout?</p>
            <Link to='/logout'
                onClick={handleLogout}
                className="btn btn-error px-6 py-2 font-bold"
            >
                Logout
            </Link>
            <button
                onClick={() => navigate("/")}
                className="btn btn-secondary px-6 py-2 font-bold"
            >
                Cancel
            </button>
        </div>
    );
};

export default Logout;
