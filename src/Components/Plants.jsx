
import React from "react";
import MyContainer from "../Components/MyContainer";
import { Link, useLoaderData } from "react-router";

const Plants = () => {
    const plants = useLoaderData();
    return (
        <MyContainer>
            <h1 className="text-4xl font-bold text-center mt-12 mb-8">
                Our Plants Collection
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {plants.map((plant) => (
                    <div
                        key={plant.plantId}
                        className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={plant.image}
                            alt={plant.plantName}
                            className="w-full h-48 object-contain"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-1">{plant.plantName}</h3>
                            <p className="text-gray-600 mb-1">Price: ${plant.price}</p>
                            <p className="text-yellow-500 mb-3">Rating: {plant.rating} ⭐</p>
                            <Link to={`/plantsdetails/${plant.plantId}`} className="block w-full text-center bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </MyContainer>
    );
};

export default Plants;


// plantName, image, description, price, rating, availableStock, 