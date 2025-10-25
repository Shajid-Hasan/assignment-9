import React, { useState } from "react";
import MyContainer from "../Components/MyContainer";
import { auth } from "../assets/Firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router";

const MyProfile = () => {
    const user = auth?.currentUser;
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const photo = e.target.photo.value.trim();

        if (!name || !photo) {
            toast.error("Please fill in all fields!");
            return;
        }

        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                toast.success("Profile updated successfully!");
                e.target.reset();
                setShowForm(false);
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => setLoading(false));
    };

    return (
        <MyContainer>
            <div className="flex flex-col items-center justify-center mt-10 p-6">
                <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm text-center">
                    {/* USER INFO */}
                    <img src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} alt="User" className="w-28 h-28 mx-auto rounded-full border-4 border-yellow-300" />
                    <h2 className="text-2xl font-bold mt-3 text-gray-800">
                        {user?.displayName || ""}
                    </h2>
                    <p className="text-gray-500">{user?.email}</p>

                    {/* UPDATE PROFILE BUTTON */}
                    <Link
                        onClick={() => setShowForm(!showForm)}
                        className="btn mt-4 bg-[linear-gradient(-60deg,#ff5858_0%,#f09819_100%)] text-white font-bold border-none">
                        {showForm ? "Cancel" : "Update Profile"}
                    </Link>

                    {/* UPDATE PROFILE FORM */}
                    {showForm && (
                        <form onSubmit={handleUpdate} className="mt-6 space-y-4 text-left">
                            <label className="block text-gray-700 font-semibold">New Name</label>
                            <input type="text" name="name" className="input input-bordered w-full border-gray-300 rounded-lg" placeholder="Enter new name" />

                            <label className="block text-gray-700 font-semibold">New Photo URL</label>
                            <input type="text" name="photo" className="input input-bordered w-full border-gray-300 rounded-lg" placeholder="Enter new photo URL" />

                            <button type="submit" disabled={loading} className="btn w-full mt-3 bg-[linear-gradient(-60deg,#ff5858_0%,#f09819_100%)] text-white font-bold border-none">
                                {loading ? "Updating..." : "Save Changes"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </MyContainer>
    );
};

export default MyProfile;
