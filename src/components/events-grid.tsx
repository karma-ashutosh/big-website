import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles

import { imageNames } from "@/components/constants.ts";

const events = [
    {
        image: imageNames.SHEEP_OWNER_HAPPY,
        title: "Income Generation for Sheep Farmers",
        description:
            "Learn how sheep farming can become a source of sustainable income and contribute to community well-being.",
        calendlyLink:
            "https://calendly.com/gdsahjeevan/income-generation-for-sheep-farmers",
        actionButtonName: "Sign Up",
    },
    {
        image: imageNames.MANGROVES_1,
        title: "Understanding Mangroves Forest",
        description:
            "Explore the importance of mangroves in maintaining ecological balance and protecting coastal areas.",
        calendlyLink: "/blog/mangroves",
        actionButtonName: "Know More",
    },
    {
        image: imageNames.BANNI_GRASSLAND_1,
        title: "Banni Grassland and Future of 14 native animals",
        description:
            "Dive into the future of the Banni Grassland and learn about the efforts to preserve native animal species.",
        calendlyLink:
            "https://calendly.com/karmav44990/understanding-mangroves-forest",
        actionButtonName: "Learn More",
    },
    {
        image: imageNames.ACTION_IN_PROGRESS,
        title: "Action In Progress",
        description: "We've plenty of projects in progress.",
        calendlyLink: "https://grove.rainmatter.org/u/sahjeevan/activity",
        actionButtonName: "See Action In Progress",
    },
];

export default function EventSliderOnly() {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="w-full relative"
        >
            {events.map((event, i) => (
                <SwiperSlide key={i}>
                    {/* Slide Wrapper: full background image */}
                    <div
                        className="w-full h-[500px] md:h-[600px] bg-cover bg-center relative flex items-center justify-center"
                        style={{
                            backgroundImage: `url('${event.image}')`,
                        }}
                    >
                        {/* Optional darker overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Text content overlay */}
                        <div className="relative z-10 p-4 max-w-2xl text-center text-white">
                            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                                {event.title}
                            </h3>
                            <p className="text-base md:text-lg mb-6">{event.description}</p>
                            <button
                                onClick={() => window.open(event.calendlyLink, "_blank")}
                                className="inline-flex items-center px-6 py-2 bg-yellow-500 text-black text-base font-medium rounded hover:bg-yellow-600 active:bg-yellow-700 transition-colors"
                            >
                                {event.actionButtonName}
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
                    </div>
                </SwiperSlide>
            ))}

            {/* Pagination Bullets are automatically inserted by Swiper, but we’ll override styles below */}
        </Swiper>
    );
}
