import React from "react";

interface ImageCardProps {
    image: string;
    credit?: string;
    title: string;
    link: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, credit, title, link }) => {
    return (
        <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden group">
            {/* Image */}
            <div className="relative w-full h-48">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
                />
                {credit && (
                    <p className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                        © {credit}
                    </p>
                )}
            </div>

            {/* Text Above Image */}
            <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                    href={link}
                    className="text-white text-lg font-bold hover:underline"
                >
                    {title}
                </a>
                <div className="mt-2 text-purple-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};


interface CardData {
    image: string;
    credit?: string;
    title: string;
    link: string;
}

const ImageCardGrid: React.FC = () => {
    const cards: CardData[] = [
        {
            image: "https://via.placeholder.com/300x200",
            credit: "Sam Farkas/NOAA",
            title: "Add Your Voice: Expand habitat for manatees",
            link: "#",
        },
        {
            image: "https://via.placeholder.com/300x200",
            credit: "Douglas Rissing/iStock",
            title: "Wildlife and Politics",
            link: "#",
        },
        {
            image: "https://via.placeholder.com/300x200",
            credit: "B. Barthelemg/USFS",
            title: "Make an investment in wildlife!",
            link: "#",
        },
    ];

    return (
        <div className="py-8 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <ImageCard
                        key={index}
                        image={card.image}
                        credit={card.credit}
                        title={card.title}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCardGrid;
