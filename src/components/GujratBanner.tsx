import { FC } from "react";

type IconInfo = {
    name: string;
    description: string;
    iconUrl: string;
};

interface BannerProps {
    title: string;
    description: string;
    icons: IconInfo[];
}

const BannerComponent: FC<BannerProps> = ({ title, description, icons }) => {
    return (
        <div className="bg-green-700 w-full h-auto flex justify-center items-center p-10 md:p-20">
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
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={icon.iconUrl}
                            alt={icon.name}
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span className="text-white text-xs mt-2">{icon.description}</span>
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
        iconUrl: "URL_OF_ICON",
    },
    {
        name: "Dense Grassland",
        description: "Dense Grassland",
        iconUrl: "URL_OF_ICON",
    },
    {
        name: "Thorn-Scrub Forest",
        description: "Thorn-Scrub Forest",
        iconUrl: "URL_OF_ICON",
    },
    {
        name: "Mangroves",
        description: "Mangroves",
        iconUrl: "URL_OF_ICON",
    },
    {
        name: "Rain-fed Agriculture",
        description: "Rain-fed Agriculture",
        iconUrl: "URL_OF_ICON",
    },
    {
        name: "Irrigated Agriculture",
        description: "Irrigated Agriculture",
        iconUrl: "URL_OF_ICON",
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
