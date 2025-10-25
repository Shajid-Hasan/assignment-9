
import React, { useState } from 'react';
import MyContainer from '../Components/MyContainer';
import Banner from './Banner';
import { useLoaderData } from 'react-router';

const careTips = [
    { title: "Watering", description: "Water your plants twice a week or when soil is dry." },
    { title: "Sunlight", description: "Provide indirect sunlight for 4-6 hours per day." },
    { title: "Fertilizing", description: "Use organic fertilizer once a month for best growth." },
];

const experts = [
    { name: "Alice Green", specialization: "Indoor Plants", image: "https://i.postimg.cc/fR9YKjJb/photo-1573497019236-17f8177b81e8.jpg" },
    { name: "John Leaf", specialization: "Succulents & Cacti", image: "https://i.postimg.cc/KvKTGr7g/360-F-297245133-g-BPf-K0h10UM3y7vfo-Ei-BC3ZXt559KZar.jpg" },
    { name: "Maria Bloom", specialization: "Air Purifying Plants", image: "https://i.postimg.cc/Tw7yGpKR/pexels-olly-774909.jpg" },
    { name: "Sam Root", specialization: "Herbs & Edibles", image: "https://i.postimg.cc/qvszqmNZ/360-F-242000451-i5W8q-BEWBw5hth-TWg-PTog-YYl8qx-IX4f5.jpg" },
];

const ecoDecor = [
    { title: "Cozy Living Room", image: "https://i.postimg.cc/gj29W2fL/photo-1592178036775-70c41f818c13.jpg" },
    { title: "Office Greenery", image: "https://i.postimg.cc/sXK8wRvg/Mobilane-HQ-Live-Picture-Live-Divider-Office-01.jpg" },
    { title: "Bedroom Oasis", image: "https://i.postimg.cc/htx5Nmfk/cozy-modern-bedroom-with-comfortable-bedding-green-plants-generated-by-ai-188544-38187.avif" },
];

const Home = () => {
    const plants = useLoaderData();
    const [selectedPlant, setSelectedPlant] = useState(null); // For modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (plant) => {
        setSelectedPlant(plant);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPlant(null);
        setIsModalOpen(false);
    };

    return (
        <main>
            <MyContainer>
                <Banner />

                {/* TOP RATED INDOR PLANT */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-6">Top Rated Indoor Plants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {plants.slice(0, 6).map((plant) => (
                            <div
                                key={plant.plantId}
                                className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={plant.image}
                                        alt={plant?.plantName}
                                        className="w-full h-48 object-contain transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-1">{plant?.plantName}</h3>
                                    <p className="text-gray-600 mb-1">Price: ${plant?.price}</p>
                                    <p className="text-yellow-500 mb-3">Rating: {plant?.rating} ⭐</p>
                                    <button
                                        onClick={() => openModal(plant)}
                                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Modal */}
                {isModalOpen && selectedPlant && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                        <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full p-6 relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                            >
                                &times;
                            </button>
                            <div className="flex flex-col md:flex-row gap-6">
                                <img
                                    src={selectedPlant.image}
                                    alt={selectedPlant.plantName}
                                    className="w-full md:w-1/2 h-64 object-contain rounded-lg"
                                />
                                <div className="md:w-1/2">
                                    <h2 className="text-2xl font-bold mb-2">{selectedPlant.plantName}</h2>
                                    <p className="text-gray-700 mb-2">{selectedPlant.description}</p>
                                    <p className="text-gray-700 mb-1">Price: ${selectedPlant.price}</p>
                                    <p className="text-yellow-500 mb-1">Rating: {selectedPlant.rating} ⭐</p>
                                    <p className="text-gray-600">Stock: {selectedPlant.availableStock}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* PLANT CARE TIPS */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Plant Care Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {careTips.map((tip, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl text-center"
                            >
                                <h3 className="text-xl font-bold mb-3 text-green-900">{tip.title}</h3>
                                <p className="text-gray-700">{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* MEET OUR GREEN EXPERTS */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Meet Our Green Experts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {experts.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center"
                            >
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-300 shadow-lg mb-4">
                                    <img
                                        src={exp?.image}
                                        alt={exp.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1 text-green-900">{exp?.name}</h3>
                                <p className="text-gray-700">{exp?.specialization}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ECO DECOR */}
                <section className="mt-12 mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Eco Decor Ideas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ecoDecor.map((idea, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <img
                                    src={idea?.image}
                                    alt={idea.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white font-semibold text-lg text-center">
                                    {idea.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </MyContainer>
        </main>
    );
};

export default Home;
