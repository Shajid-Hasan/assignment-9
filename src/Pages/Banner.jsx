import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const slides = [
    {
        title: "Nurture Nature Indoors",
        subtitle: "Hand-picked plants & expert care tips.",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=80&auto=format&fit=crop",
    },
    {
        title: "Grow Happiness, One Leaf at a Time",
        subtitle: "Low-maintenance plants for every space.",
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80&auto=format&fit=crop",
    },
    {
        title: "Bring Calm to Your Room",
        subtitle: "Styling tips & care guides included.",
        img: "https://images.unsplash.com/photo-1524594154907-6b3e1a4d5f9d?w=1600&q=80&auto=format&fit=crop",
    },
];

export default function HeroMotionCarousel() {
    const [index, setIndex] = useState(0);
    const next = () => setIndex((i) => (i + 1) % slides.length);
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen max-h-[720px] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.2), rgba(2,6,23,0.45)), url('${slides[index].img}')`,
                    }}
                >
                    <div className="container mx-auto h-full flex items-center">
                        <div className="max-w-2xl px-6 py-12 text-white">
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                {slides[index].title}
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-white/90">
                                {slides[index].subtitle}
                            </p>
                            <div className="mt-8 flex gap-3">
                                <button className="rounded-2xl px-5 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <button
                    onClick={prev}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm text-white"
                >
                    ‹
                </button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <button
                    onClick={next}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm text-white"
                >
                    ›
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
