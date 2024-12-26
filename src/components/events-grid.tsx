import { useEffect, useState } from "react";
import { imageNames } from "@/components/constants.ts";

const events = [
    {
        image: imageNames.SHEEP_OWNER_HAPPY,
        title: "Income Generation for Sheep Farmers",
        calendlyLink: "https://calendly.com/karmav44990/sahjeevan-employment-program",
    },
    {
        image: imageNames.MANGROVES_1,
        title: "Understanding Mangroves Forest",
        calendlyLink: "https://calendly.com/karmav44990/understanding-mangroves-forest",
    },
    {
        image: imageNames.BANNI_GRASSLAND_1,
        title: "Banni Grassland and Future of 14 native animals",
        calendlyLink: "https://calendly.com/karmav44990/understanding-mangroves-forest",
    },
];

export default function EventsGrid() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`bg-heavygreen container mx-auto px-4 py-8 ${
                isScrolled ? "mt-8" : "-mt-4"
            } mb-8 relative z-10 transition-all duration-300`}
        >
            {/* Heading Section */}
            <div className="mb-6 text-center flex flex-col items-center">
                {/* Diagonal / Rotated Banner */}
                <div className="relative inline-block transform rotate-2 bg-gradient-to-bl from-purple-600 to-purple-700 shadow-lg">
                    <h2 className="text-white font-bold text-3xl md:text-4xl uppercase px-8 py-4 transform -rotate-1">
                        Upcoming Events
                    </h2>
                </div>

                {/* Subheading */}
                <p className="mt-3 max-w-xl mx-auto text-gray-100 md:text-base px-4">
                    Don’t miss these opportunities to learn more about our work and
                    connect with the community.
                </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event, i) => (
                    <div
                        key={i}
                        className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white group"
                    >
                        {/* Image container */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                                style={{ backgroundImage: `url('${event.image}')` }}
                                onClick={() => window.open(event.calendlyLink, "_blank")}
                            />
                        </div>

                        {/* Content (title & button) */}
                        <div className="p-5 flex flex-col flex-grow pb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {event.title}
                            </h3>
                            <button
                                onClick={() => window.open(event.calendlyLink, "_blank")}
                                className="mt-auto inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 active:bg-purple-800 transition-colors duration-200"
                            >
                                Sign Up
                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
