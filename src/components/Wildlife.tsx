import {imageNames, imageSet2} from "@/components/constants.ts";

const wildlifeItems = [
    {
        image: imageSet2.CAMELS_GROUP,
        title: "Kharai Camel",
        text: "The swimming Kharai camel, essential for Gujarat’s mangroves and local livelihoods, faces extinction. Losing them means erasing a unique ecological and cultural bond.",
        url: "/bison",
    },
    {
        image: imageNames.INDIAN_GREY_WOLF,
        title: "Indian Grey Wolf",
        text: "One of the world’s oldest wolf lineages, the Indian Grey Wolf maintains grassland ecosystems. Their extinction threatens biodiversity and disrupts nature's balance.",
        url: "/great-plains",
    },
    {
        image: imageSet2.DUCKS_IN_LAKE,
        title: "Bar-tailed Godwits",
        text: "Flying over 12,000 km nonstop, these shorebirds inspire awe and signal healthy wetlands. Their loss would mark failing ecosystems critical for water and agriculture.",
        url: "/owls",
    },
    {
      image: imageNames.KUTCH_MANGROVES,
        title: "Kutchi or Kachchh Mangroves",
        text: "These mangroves protect Gujarat’s coasts and support fisheries. Losing them would mean weaker coastal defenses and jeopardized livelihoods for millions.",
        url: "/great-plains",
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
                    <div key={index} className="relative group">
                        {/* Image Section */}
                        <div
                            className="w-full h-64 bg-cover bg-center rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                            style={{
                                backgroundImage: `url('${item.image}')`,
                            }}
                        >
                            {/* Text Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold text-center px-4">
                                    {item.text}
                                </p>
                            </div>
                        </div>

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
