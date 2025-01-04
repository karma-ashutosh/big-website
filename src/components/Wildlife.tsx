import {imageNames} from "@/components/constants.ts";

const wildlifeItems = [
    {
        image: imageNames.MANGROVES_1,
        title: "Bison",
        url: "/bison",
    },
    {
        image: imageNames.DENSE_GRASSLAND_1,
        title: "Great Plains",
        url: "/great-plains",
    },
    {
        image: "/path/to/owls.jpg",
        title: "Owls",
        url: "/owls",
    },
    {
        image: "/path/to/deciduous_forests.jpg",
        title: "Deciduous Forests",
        url: "/deciduous-forests",
    },
];

export default function WildlifeGrid() {
    return (
        <div className="bg-gray-100 py-12 px-6">
            <h2 className="text-center text-gray-900 text-3xl font-bold mb-8">
                Wildlife & Wild Places
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {wildlifeItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* Image Section */}
                        <div
                            className="w-full h-64 bg-cover bg-center rounded-lg shadow-md"
                            style={{
                                backgroundImage: `url('${item.image}')`,
                            }}
                        ></div>
                        {/* Title and Link */}
                        <div className="mt-4 flex items-center space-x-2">
                            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition"
                                aria-label={`Learn more about ${item.title}`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
