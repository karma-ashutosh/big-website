import {imageNames} from "@/components/constants.ts";

const themes = [
    {
        title: "Sustainable Agriculture",
        description: "Promoting environmentally friendly farming practices for a better tomorrow.",
        image: imageNames.MANGROVES_1,
    },
    {
        title: "Forest Conservation",
        description: "Protecting and preserving our forests to maintain ecological balance.",
        image: imageNames.DENSE_GRASSLAND_1,
    },
    {
        title: "Community Livelihood",
        description: "Empowering communities with sustainable livelihood opportunities.",
        image: imageNames.RAIN_FED_AGRICULTURE_1,
    },
    {
        title: "Water Resource Management",
        description: "Ensuring equitable and sustainable use of water resources.",
        image: imageNames.SHEEPLINGS_SLEEPING,
    },
];

export default function ThemeGrid() {
    return (
        <div className="bg-gray-100 py-8 px-8">
            <h2 className="text-center text-gray-800 text-3xl font-bold mb-6">
                Our Organizational Themes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {themes.map((theme, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                    >
                        {/* Image Section */}
                        <div
                            className="h-48 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${theme.image}')`,
                            }}
                        ></div>
                        {/* Text Section */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {theme.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{theme.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
