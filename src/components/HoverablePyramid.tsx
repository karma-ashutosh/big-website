import React, { useState, useEffect } from "react";

type PyramidLayer = {
    id: number;
    label: string;
    hoverableTextPart: string;
    onHoverTextPart: string;
};

export const pyramidLayers: PyramidLayer[] = [
    {
        id: 3,
        label: "We Engage",
        hoverableTextPart: " Advocacy",
        onHoverTextPart:
            "We engage Advocacy in diverse ways with all the sections of society to advocate for policies and programs that foster the holistic well-being of the communities",
    },
    {
        id: 2,
        label: "We Facilitate",
        hoverableTextPart: " Institutions",
        onHoverTextPart:
            "We Facilitate Institutions to enable a deeper engagement with them at the livelihoods-environment interface",
    },
    {
        id: 1,
        label: "We Equip",
        hoverableTextPart: " Communities",
        onHoverTextPart:
            "We equip communities. These communities with information and linkage to help them diversify livelihoods, gain legal rights, and attain recognition for their contributions.",
    },
];

interface PyramidProps {
    layers: PyramidLayer[];
}

const Pyramid: React.FC<PyramidProps> = ({ layers }) => {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [showDefaultMessage, setShowDefaultMessage] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDefaultMessage(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return (
        <div className="relative w-full h-96 mx-auto flex flex-col items-center">
            {/* Hover Text Display */}
            {
                (showDefaultMessage || hoverText) &&
                <div
                    className="absolute top-4 text-white font-semibold text-center px-6 py-3 bg-blue-800 rounded shadow-lg z-10">
                    {hoverText || (showDefaultMessage ? "Hover over a layer to see details." : "")}
                </div>
            }

            {/* Pyramid Layers */}
            <div className="relative w-full h-full flex justify-center items-end">
                {layers.map((layer, index) => (
                    <div
                        key={layer.id}
                        onMouseEnter={() => setHoverText(layer.onHoverTextPart)}
                        onMouseLeave={() => setHoverText(null)}
                        className={`
    absolute 
    font-bold 
    text-white 
    py-4 
    rounded-lg 
    shadow-lg 
    transition-all 
    duration-300 
    ease-in-out
  `}
                        style={{
                            width: `${100 - index * 20}%`, // Reduce width per layer
                            left: `${index * 10}%`,        // Center each layer horizontally
                            bottom: `${index * 60}px`,     // Stack layers vertically
                            background: `linear-gradient(135deg, #4f46e5, #3b82f6)`, // Gradient
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",             // Shadow
                            transform: "scale(1)",         // Default scale
                            transition: "all 0.3s",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.background =
                                "linear-gradient(135deg, #6366f1, #2563eb)";
                            e.currentTarget.style.zIndex = "10";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.background =
                                "linear-gradient(135deg, #4f46e5, #3b82f6)";
                            e.currentTarget.style.zIndex = "unset";
                        }}
                    >
                        {/* Headline */}
                        <div className="text-2xl uppercase tracking-wide mb-1">
                            {layer.label}
                        </div>

                        {/* Subtext (italic) */}
                        <div className="text-lg italic text-gray-100">
                            {layer.hoverableTextPart}
                        </div>

                        {/* "...more" (subtle) */}
                        {(layer.onHoverTextPart !== hoverText) && (
                            <p className="mt-1 text-sm text-gray-300 font-normal">
                                know more
                            </p>
                        )}
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Pyramid;
