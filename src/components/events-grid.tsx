import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
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

            {/* Swiper Slider */}
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2} // Adjust for larger slides
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 10, // Slight stretch to create space
                    depth: 150, // Increase depth for perspective
                    modifier: 2, // Increase modifier for prominent central slide
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full max-w-6xl mx-auto" // Wider container for larger slides
            >
                {events.map((event, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-green-700 to-green-500 p-6 rounded-lg">
                            {/* Text Section */}
                            <div className="flex-grow md:w-2/3 text-white p-4">
                                <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                                <p className="mb-6">{event.description}</p>
                                <button
                                    onClick={() => window.open(event.calendlyLink, "_blank")}
                                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 active:bg-purple-800 transition-colors duration-200"
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

                            {/* Image Section */}
                            <div className="md:w-1/3 aspect-[4/3] bg-cover bg-center rounded-md shadow-md" style={{ backgroundImage: `url('${event.image}')` }} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
