import React from "react";

const VisionMissionStrategy = ({
                                   sections = [
                                       { title: "Vision", content: "Lorem ipsum dolor sit amet.", icon: "👁️" },
                                       { title: "Mission", content: "Curabitur auctor lacus ut purus feugiat.", icon: "✈️" },
                                       { title: "Strategies", content: "Praesent commodo faucibus nisi at.", icon: "🏰" },
                                       { title: "Objectives", content: "Sed efficitur mi at lectus sagittis.", icon: "🏹" },
                                       { title: "Action Plan", content: "Aenean ut libero ut urna tristique.", icon: "🤝" },
                                   ],
                               }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-8 bg-gray-100 min-h-screen">
            {/* Left: Concentric Circles */}
            <div className="relative w-96 h-96 flex justify-center items-center">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`absolute rounded-full flex justify-center items-center ${
                            index === sections.length - 1 ? "w-full h-full" : `w-${96 - index * 12} h-${96 - index * 12}`
                        } bg-blue-${500 - index * 100}`}
                        style={{
                            zIndex: sections.length - index,
                        }}
                    >
                        <span className="text-white font-semibold text-xl">{section.title}</span>
                    </div>
                ))}
            </div>

            {/* Right: Section Descriptions */}
            <div className="space-y-6">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-lg"
                    >`
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white text-2xl">
                            {section.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                            <p className="text-gray-600">{section.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisionMissionStrategy;
