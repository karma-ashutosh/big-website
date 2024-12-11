import { FC, useState } from "react";
import {
    BanniGrasslanData, DenseForestData, IrrigatedAgricultureData,
    MangrovesData,
    RainFedAgri,
    ThornScrubForestData,
    titleToBlogUrl
} from "@/components/Blog.tsx";

type IconInfo = {
    name: string;
    description: string;
    iconUrl: string;
    hoverText: string; // Added hover text
    linkUrl: string; // URL to navigate to when clicked
};

interface BannerProps {
    title: string;
    description: string;
    icons: IconInfo[];
}

const BannerComponent: FC<BannerProps> = ({ title, description, icons }) => {
    const [hoveredIconIndex, setHoveredIconIndex] = useState<number | null>(null);

    return (
        <div className="bg-green-700 w-full h-auto flex flex-col items-center p-10 md:p-20">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Text Section */}
                <div className="flex flex-col justify-center items-start space-y-4">
                    <h1 className="text-4xl font-bold text-white">{title}</h1>
                    <p className="text-md text-white opacity-75">{description}</p>
                </div>

                {/* Map Section */}
                <div className="flex justify-center items-center">
                    <img
                        src="https://sahjeevan.org/wp-content/uploads/2023/03/map-marker-1.png"
                        alt="Gujarat Map"
                        width={600}
                        height={600}
                        className="object-contain rounded-md shadow-lg"
                    />
                </div>
            </div>

            {/* Icon Section */}
            <div className="w-full mt-8 flex justify-center items-center space-x-8">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center relative cursor-pointer"
                        onMouseEnter={() => setHoveredIconIndex(index)}
                        onMouseLeave={() => setHoveredIconIndex(null)}
                        // onClick={() => window.open(icon.linkUrl, "_blank")} // Open the URL in a new tab
                        onClick={() => window.open(icon.linkUrl, "_self")} // Open the URL in a new tab
                    >
                        <img
                            src={icon.iconUrl}
                            alt={icon.name}
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span className="text-white text-xs mt-2">{icon.description}</span>

                        {/* Hover Text */}
                        {hoveredIconIndex === index && (
                            <div className="absolute bottom-full mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded shadow-md whitespace-nowrap">
                                {icon.hoverText}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Example usage of BannerComponent
const iconData: IconInfo[] = [
    {
        name: "Banni Grassland",
        description: "Banni Grassland",
        iconUrl: "https://sahjeevan.org/wp-content/uploads/2023/01/1banni.png",
        hoverText: "Explore the Banni Grassland ecosystem",
        linkUrl: titleToBlogUrl(BanniGrasslanData.title),
    },
    {
        name: "Dense Grassland",
        description: "Dense Grassland",
        iconUrl: "https://sahjeevan.org/wp-content/uploads/2023/01/2dense.png",
        hoverText: "Learn about Dense Grasslands",
        linkUrl: titleToBlogUrl(DenseForestData.title),
    },
    {
        name: "Thorn-Scrub Forest",
        description: "Thorn-Scrub Forest",
        iconUrl: "https://sahjeevan.org/wp-content/uploads/2023/01/3thorn.png",
        hoverText: "Discover Thorn-Scrub Forest",
        linkUrl: titleToBlogUrl(ThornScrubForestData.title),
    },
    {
        name: "Mangroves",
        description: "Mangroves",
        iconUrl: "https://sahjeevan.org/wp-content/uploads/2023/01/4mangroves.png",
        hoverText: "Learn more about Mangroves",
        linkUrl: titleToBlogUrl(MangrovesData.title),
    },
    {
        name: "Rain-fed Agriculture",
        description: "Rain-fed Agriculture",
        iconUrl: "https://sahjeevan.org/wp-content/uploads/2023/01/5rain.png",
        hoverText: "Explore Rain-fed Agriculture",
        linkUrl: titleToBlogUrl(RainFedAgri.title),
    },
    {
        name: "Irrigated Agriculture",
        description: "Irrigated Agriculture",
        iconUrl: "https://sahjeevan.org/wp-content/uploads/2023/01/6irrigated.png",
        hoverText: "Learn about Irrigated Agriculture",
        linkUrl: titleToBlogUrl(IrrigatedAgricultureData.title),
    },
];

export default function GujratBanner() {
    return (
        <BannerComponent
            title="Traversing through Gujarat"
            description="Explore the map by hovering over it on your desktop or tapping on a mobile device."
            icons={iconData}
        />
    );
}


