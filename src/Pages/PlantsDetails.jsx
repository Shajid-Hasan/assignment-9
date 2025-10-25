import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router";
import MyContainer from "../Components/MyContainer";
import { toast } from "react-toastify";

const PlantsDetails = () => {
    const { id } = useParams();
    const plants = useLoaderData();
    const plant = plants.find((p) => p.plantId === parseInt(id));

    const [formData, setFormData] = useState({ name: "", email: "" });

    if (!plant) {
        return (
            <MyContainer>
                <h2 className="text-center text-2xl mt-12 text-red-500">
                    Plant not found.
                </h2>
            </MyContainer>
        );
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // HANDEL SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Consultation booked for ${formData.name}!`);
        setFormData({ name: "", email: "" });
    };

    return (
        <MyContainer>
            <div className="flex flex-col md:flex-row gap-10 mt-12">

                {/* PLANT IMAGE*/}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
                    />
                </div>

                {/* PLANTS DETAILS */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{plant.plantName}</h1>
                    <p className="text-gray-700 mb-3">{plant.description}</p>
                    <p className="text-gray-800 font-semibold mb-1">
                        Price: <span className="text-green-600">${plant.price}</span>
                    </p>
                    <p className="text-yellow-500 mb-1">Rating: {plant.rating} ⭐</p>
                    <p className="text-gray-600 mb-6">Stock: {plant.availableStock}</p>

                    {/* BOOK CONSULTATION FORM */}
                    <div className="bg-green-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                            Book Consultation
                        </h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="p-2 border rounded focus:outline-green-500"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="p-2 border rounded focus:outline-green-500"
                            />
                            <button
                                type="submit"
                                className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
                            >
                                Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </MyContainer>
    );
};

export default PlantsDetails;
