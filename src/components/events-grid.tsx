import { useEffect, useState } from "react";
import {imageNames} from "@/components/constants.ts";

// Example images, titles, and Calendly links
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
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`bg-background container mx-auto px-8 ${
                isScrolled ? "mt-8" : "-mt-4"
            } mb-8 relative z-10 transition-all duration-300`}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event, i) => (
                    <div key={i} className="flex flex-col flex-grow">
                        {/* Image Container */}
                        <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-6">
                            <div
                                className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                                style={{ backgroundImage: `url('${event.image}')` }}
                                // On click, open Calendly in a new tab
                                onClick={() => window.open(event.calendlyLink, "_blank")}
                            />
                        </div>

                        {/* Title with Line */}
                        <div className="flex items-start">
                            <div className="h-1 w-12 bg-purple-600 mt-3 mr-4" />
                            <button
                                onClick={() => window.open(event.calendlyLink, "_blank")}
                                className="text-2xl font-bold hover:text-purple-600 transition-colors duration-200 flex items-center group"
                            >
                                {event.title}
                                <svg
                                    className="w-6 h-6 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200"
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
