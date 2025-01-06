import React from "react";
import { Leaf, TreePine as Tree } from 'lucide-react';
import {imageNames} from "@/components/constants.ts"; // Importing icons from lucide-react

interface BlogPageProps {
    title: string;
    paragraphs: string[];
    images?: string[]; // Optional: Array of image URLs (can be 1 to 3 images)
}

const BlogPage: React.FC<BlogPageProps> = ({ title, paragraphs, images = [] }) => {
    return (
        <div className="bg-gradient-to-b from-yellow-100 to-green-50 container mx-auto px-8 mt-8 mb-16 py-16 relative">
            {/* Decorative Background SVG */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <svg
                    viewBox="0 0 100 100"
                    className="absolute top-20 right-0 w-64 h-64 opacity-10 text-green-400"
                >
                    <circle cx="50" cy="50" r="50" fill="currentColor" />
                </svg>
                <svg
                    viewBox="0 0 100 100"
                    className="absolute bottom-20 left-0 w-48 h-48 opacity-10 text-yellow-400"
                >
                    <polygon points="50,0 100,100 0,100" fill="currentColor" />
                </svg>
            </div>

            {/* Title Section */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-yellow-800">{title}</h1>
                <div className="h-1 w-24 bg-green-600 mx-auto mt-4"></div>
            </div>

            {/* Images Section */}
            {images.length > 0 && (
                <div
                    className={`grid ${
                        images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    } gap-8 mb-12`}
                >
                    {images.slice(0, 3).map((image, index) => (
                        <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg">
                            <div
                                className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                                style={{
                                    backgroundImage: `url('${image}')`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Paragraphs Section */}
            <div className="space-y-8 bg-white p-8 rounded-md shadow-md">
                {paragraphs.map((paragraph, index) => (
                    <div key={index} className="relative">
                        {/* Drop cap for the first paragraph */}
                        {index === 0 ? (
                            <p className="text-lg text-gray-800 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-green-600">
                                {paragraph}
                            </p>
                        ) : (
                            <p className="text-lg text-gray-800 leading-relaxed">
                                {paragraph}
                            </p>
                        )}
                        {/* Highlight some important keywords */}
                        {index === 1 && (
                            <div className="mt-4 text-base italic text-green-700 border-l-4 border-green-400 pl-4">
                                <Leaf className="inline-block text-green-600 mr-2" />
                                Dense forests support a rich diversity of flora and fauna, including <strong>teak, bamboo</strong>, and <strong>medicinal plants</strong>.
                            </div>
                        )}
                    </div>
                ))}

                {/* Quote Section */}
                <blockquote className="mt-8 border-l-4 border-yellow-500 pl-4 italic text-yellow-700">
                    "Efforts to protect dense forests include the establishment of protected areas and wildlife sanctuaries."
                </blockquote>

                {/* Icon Decoration */}
                <div className="flex items-center mt-8 text-green-700 font-semibold">
                    <Tree className="mr-2 text-green-500" />
                    Protecting forests is essential for ensuring biodiversity.
                </div>
            </div>
        </div>
    );
};

export default BlogPage;



export const titleToBlogUrl = (title: string) => {
   return "/blog/" + title.replace(' ', '-').toLowerCase()
}

export const WildLifeConservationData: BlogPageProps = {
        title: "Wildlife Conservation",
        paragraphs: [
            "Wildlife conservation is the practice of protecting animal species and their habitats in order to maintain healthy biodiversity. It involves a variety of efforts aimed at ensuring that natural ecosystems remain intact and can support a wide range of species.",
            "Human activities, such as deforestation and pollution, have greatly impacted wildlife populations. Conservation efforts, such as setting up protected areas, wildlife corridors, and reforestation projects, are critical in mitigating these threats.",
            "The role of local communities in wildlife conservation cannot be overlooked. Engaging the community helps create a sense of ownership and ensures that conservation efforts are sustainable in the long run."
        ],
        images: [
            "https://sahjeevan.org/wp-content/uploads/2023/04/Slider3-en-4.png",
            "https://sahjeevan.org/wp-content/uploads/2023/04/Institutions-2.png"
        ]
    }
export const GujratInfo: BlogPageProps = {
    title: "Gujarat Map",
    paragraphs: [
        "Gujarat is home to diverse ecosystems, ranging from grasslands to mangroves. Understanding the geography of Gujarat is key to appreciating its rich biodiversity.",
        "The map of Gujarat highlights important wildlife habitats like the Banni Grasslands and the Gir Forest. These areas play a critical role in supporting a wide variety of flora and fauna, including the famous Asiatic lions.",
        "Efforts are being made to map and protect critical habitats to prevent further degradation of Gujarat's natural resources and wildlife."
    ],
    images: [
        "https://sahjeevan.org/wp-content/uploads/2023/03/map-marker-1.png"
    ]
};
export const BanniGrasslanData: BlogPageProps = {
    title: "Banni Grassland",
    paragraphs: [
        "The Banni Grassland, located in the Kutch district of Gujarat, is one of the largest natural grasslands in Asia. It is home to a wide variety of plant and animal species and is crucial for the livelihood of local pastoral communities.",
        "The grassland is famous for its high biodiversity, including species like the Indian wolf, hyena, and numerous bird species. The Banni is also known for its resilient grass species, which thrive even in harsh climatic conditions.",
        "Conservation of the Banni Grassland is essential to preserve its unique ecosystem and protect the wildlife that depends on it."
    ],
    images: [
        "https://sahjeevan.org/wp-content/uploads/2023/04/Slider3-en-4.png"
    ]
};
export const ThornScrubForestData: BlogPageProps = {
    title: "Thorn-Scrub Forest",
    paragraphs: [
        "The thorn-scrub forests of Gujarat are characterized by their dry, arid conditions and sparse vegetation. These forests play an important role in supporting species that have adapted to the harsh environment.",
        "These thorny forests are home to animals like the Indian hare, nilgai, and various reptiles. Though they may seem less diverse compared to rainforests, they have an important ecological balance.",
        "Efforts to restore thorn-scrub forests focus on preventing overgrazing, reducing human encroachment, and promoting reforestation with native plant species."
    ]
};
export const RainFedAgri: BlogPageProps = {
    title: "Rain-fed Agriculture",
    paragraphs: [
        "Rain-fed agriculture is the main source of livelihood for many rural communities in Gujarat. Unlike irrigated farming, rain-fed agriculture relies solely on seasonal rainfall, making it highly vulnerable to changes in weather patterns.",
        "The farmers in these regions grow a variety of crops, such as millets, pulses, and oilseeds, which are well adapted to the local environment. These crops are also important for maintaining food security in the area.",
        "Adopting sustainable agricultural practices, such as crop rotation and rainwater harvesting, can help make rain-fed agriculture more resilient in the face of climate change."
    ]
};
export const MangrovesData: BlogPageProps = {
    title: "Mangroves",
    paragraphs: [
        "Gujarat is home to extensive mangrove ecosystems, especially along the Gulf of Kutch. Mangroves serve as nurseries for marine life and protect the coastal areas from erosion and storm surges.",
        "Mangroves provide critical habitat for many fish, birds, and other wildlife. They also play an important role in carbon sequestration, helping mitigate climate change.",
        "Efforts to conserve mangroves include afforestation initiatives, involving local communities in planting efforts, and preventing unsustainable harvesting of mangrove resources."
    ],
    images: [
        imageNames.KUTCH_MANGROVES
    ]
};
export const WildlifeProtectionData: BlogPageProps = {
    title: "Wildlife Protection",
    paragraphs: [
        "Wildlife protection efforts in Gujarat involve creating protected areas, such as national parks and wildlife sanctuaries, to conserve critical habitats and species.",
        "The state is home to several iconic species, including the Asiatic lion, Indian wild ass, and various migratory birds. Protecting these species is vital for maintaining the ecological balance.",
        "Community involvement and strict anti-poaching measures have played an important role in wildlife protection, ensuring that endangered species have a safe environment to thrive."
    ],
    images: [
        "https://sahjeevan.org/wp-content/uploads/2023/04/Institutions-2.png"
    ]
};
export const HabitatRestorationData: BlogPageProps = {
    title: "Habitat Restoration",
    paragraphs: [
        "Habitat restoration aims to return degraded ecosystems to their natural state, allowing wildlife populations to recover and thrive. In Gujarat, efforts focus on restoring grasslands, forests, and wetlands.",
        "Restoration projects involve removing invasive species, replanting native vegetation, and improving water sources. These activities help improve the quality of habitats and support the return of native wildlife.",
        "The success of habitat restoration depends heavily on the cooperation of local communities, as they play a critical role in the ongoing management and protection of restored areas."
    ]
};
export const EndageredSpeciesData: BlogPageProps = {
    title: "Endangered Species",
    paragraphs: [
        "Gujarat is home to several endangered species, including the Asiatic lion, Indian wolf, and various bird species. Protecting these species is crucial for maintaining the region's biodiversity.",
        "Endangered species face numerous threats, such as habitat loss, poaching, and climate change. Conservation programs aim to address these issues by creating safe habitats and implementing breeding programs.",
        "Public awareness and education are key to protecting endangered species. By understanding the importance of each species, people are more likely to support conservation efforts."
    ]
};
export const WildlifeSanctuaryData: BlogPageProps = {
    title: "Wildlife Sanctuary",
    paragraphs: [
        "Wildlife sanctuaries are protected areas established to conserve the natural habitat of different species. Gujarat has numerous sanctuaries, such as Gir National Park, which is home to the Asiatic lion.",
        "These sanctuaries provide a safe haven for wildlife, allowing them to thrive without the pressures of habitat destruction and human interference.",
        "Visitors to wildlife sanctuaries play an important role in supporting conservation efforts. By observing animals in their natural habitats, people gain an appreciation for wildlife and the importance of protecting it."
    ],
    images: [
        "https://sahjeevan.org/wp-content/uploads/2023/04/Slider6-1-min.png",
        "https://sahjeevan.org/wp-content/uploads/2023/04/Slider3-en-4.png"
    ]
};
export const DenseForestData: BlogPageProps = {
    title: "Dense Forest in Gujarat",
    paragraphs: [
        "The dense forests of Gujarat, though limited in extent compared to other regions, play an important role in maintaining the state's ecological balance. These forests are primarily found in the southern regions, including the Dangs and parts of Gir.",
        "Dense forests support a rich diversity of flora and fauna, including trees like teak, bamboo, and numerous medicinal plants. They are also home to various wildlife species such as leopards, sloth bears, and a variety of bird species.",
        "Efforts to protect dense forests include the establishment of protected areas and wildlife sanctuaries, as well as encouraging sustainable forestry practices that involve local communities in conservation efforts."
    ],
    images: [
        "https://sahjeevan.org/wp-content/uploads/2023/04/Institutions-2.png",
        "https://sahjeevan.org/wp-content/uploads/2023/04/Slider6-1-min.png"
    ]
};

export const IrrigatedAgricultureData: BlogPageProps = {
    title: "Irrigated Agriculture",
    paragraphs: [
        "Irrigated agriculture is one of the key components of Gujarat's agricultural sector, enabling farmers to cultivate crops even in areas with limited rainfall. The construction of irrigation canals, such as those linked to the Narmada River, has significantly boosted agricultural productivity in the region.",
        "Irrigation has allowed farmers to grow a variety of crops, including cotton, wheat, and sugarcane, which would not be possible under rain-fed conditions alone. It also supports horticultural crops, such as mangoes and bananas, which are important for both domestic consumption and export.",
        "However, the overuse of irrigation can lead to soil salinization and waterlogging, threatening long-term soil fertility. Sustainable irrigation practices, such as drip irrigation and efficient water management, are crucial for maintaining the health of agricultural lands in Gujarat."
    ],
    images: [
        "https://sahjeevan.org/wp-content/uploads/2023/04/Slider3-en-4.png",
        "https://sahjeevan.org/wp-content/uploads/2023/04/Slider6-1-min.png"
    ]
};

export const blogData = [
    WildLifeConservationData,
    GujratInfo,
    BanniGrasslanData,
    ThornScrubForestData,
    RainFedAgri,
    MangrovesData,
    WildlifeProtectionData,
    HabitatRestorationData,
    EndageredSpeciesData,
    WildlifeSanctuaryData,
    DenseForestData,
    IrrigatedAgricultureData
];
