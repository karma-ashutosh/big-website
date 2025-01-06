import {imageNames} from "@/components/constants.ts";

const themes = [
    {
        title: "Sustainable Livelihood",
        description: "Empowering communities with sustainable livelihood opportunities.",
        url: "http://google.com",
        image: imageNames.SUSTAINABLE_LIVELIHOOD,
    },
    {
        title: "Ecosystem Conservation",
        description: "Protecting and preserving our forests to maintain ecological balance.",
        url: "http://google.com",
        image: imageNames.ECOSYSTEM_CONSERVATION,
    },
    {
        title: "Breed Conservation",
        description: "Saving breeds left and right",
        url: "http://google.com",
        image: imageNames.BREED_CONSERVATION,
    },
    {
        title: "Water Resource Management",
        description: "Ensuring equitable and sustainable use of water resources.",
        url: "http://google.com",
        image: imageNames.WATER_RESOURCE_CONSERVATION,
    },
];

export default function ThemeGrid() {
    return (
        <div className="bg-gray-100 py-8 px-4">
            {/*<h2 className="text-center text-gray-800 text-3xl font-bold mb-6">*/}
            {/*    Our Organizational Themes*/}
            {/*</h2>*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {themes.map((theme, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                    >
                        {/* Title Section */}
                        <div className="p-4 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-800">
                                {theme.title}
                            </h3>
                            <a
                                href={theme.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-500 hover:text-purple-700 transition"
                                aria-label={`Learn more about ${theme.title}`}
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
                        <div className="border-t-2 border-purple-500 w-12 mx-auto mb-4"></div>

                        {/* Image Section */}
                        <div
                            className="h-48 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${theme.image}')`,
                            }}
                        ></div>

                        {/* Description Section */}
                        <div className="p-4">
                            <p className="text-gray-600 text-sm">{theme.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
