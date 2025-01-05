import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { imageNames } from "@/components/constants.ts";

const events = [
    {
        image: imageNames.SHEEP_OWNER_HAPPY,
        title: "Income Generation for Sheep Farmers",
        description: "Learn how sheep farming can become a source of sustainable income and contribute to community well-being.",
        calendlyLink: "https://calendly.com/karmav44990/sahjeevan-employment-program",
    },
    {
        image: imageNames.MANGROVES_1,
        title: "Understanding Mangroves Forest",
        description: "Explore the importance of mangroves in maintaining ecological balance and protecting coastal areas.",
        calendlyLink: "https://calendly.com/karmav44990/understanding-mangroves-forest",
    },
    {
        image: imageNames.BANNI_GRASSLAND_1,
        title: "Banni Grassland and Future of 14 native animals",
        description: "Dive into the future of the Banni Grassland and learn about the efforts to preserve native animal species.",
        calendlyLink: "https://calendly.com/karmav44990/understanding-mangroves-forest",
    },
];

export default function EventsSlider() {
    return (
        <div className="bg-darkgreen container mx-auto px-4 py-8 relative z-10">
            {/* Heading Section */}
            <h2 className="text-center text-white text-4xl font-bold mb-8">
                Upcoming Events
            </h2>

            {/* Swiper Slider */}
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto" // Dynamically calculates slide width
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 150, // Adjusts distance between slides
                    modifier: 2, // Enhances the central slide prominence
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full max-w-6xl mx-auto"
            >
                {events.map((event, i) => (
                    <SwiperSlide
                        key={i}
                        className="rounded-lg shadow-lg"
                        style={{
                            width: "75%", // Central slide takes ~65% of container width
                            background: "linear-gradient(to right, #1e3a8a, #22c55e)",
                        }}
                    >
                        <div className="flex flex-col md:flex-row items-center p-6 rounded-lg text-white">
                            {/* Text Section */}
                            <div className="flex-grow md:w-2/3 p-4">
                                <h3 className="text-3xl font-semibold mb-4">{event.title}</h3>
                                <p className="text-base mb-6">{event.description}</p>
                                <button
                                    onClick={() => window.open(event.calendlyLink, "_blank")}
                                    className="inline-flex items-center px-6 py-2 bg-purple-600 text-white text-base font-medium rounded hover:bg-purple-700 active:bg-purple-800 transition-colors"
                                >
                                    Sign Up
                                    <svg
                                        className="w-6 h-6 ml-2"
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

                            {/* Image Section */}
                            <div
                                className="md:w-1/3 aspect-[4/3] bg-cover bg-center rounded-md shadow-md"
                                style={{
                                    backgroundImage: `url('${event.image}')`,
                                }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
