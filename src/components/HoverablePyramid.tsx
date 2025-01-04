
type PyramidLayer = {
    id: number;
    label: string;
    hoverableTextPart: string;
    onHoverTextPart: string;
};
export const pyramidLayers : PyramidLayer[] = [
    { id: 3,
        label: "We Engage",
        hoverableTextPart: " Advocacy",
        onHoverTextPart: "We engage Advocacy in diverse ways with all the sections of society to advocate for policies and programs that foster the holistic well-being of the communities"
    },
    {
        id: 2,
        label: "We Facilitate",
        hoverableTextPart: " Institutions",
        onHoverTextPart: "We Facilitate Institutions to enable a deeper engagement with them at the livelihoods-environment interface"
    },
    { id: 1, label: "We Equip",
        hoverableTextPart: " Communities",
        onHoverTextPart: "We equip communities. These communities with information and linkage to help then  diversify livelihoods, gain legal rights and attain recognition for their contributions. "
    },
];
interface PyramidProps {
    layers: PyramidLayer[];
}

const Pyramid: React.FC<PyramidProps> = ({ layers }) => {
    return (
        <div className="relative w-full h-64 mx-auto flex justify-center items-end">
            {layers.map((layer, index) => (
                <div
                    key={layer.id}
                    onMouseEnter={() => layer.onHover(layer.id)}
                    className={`absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded shadow-lg transition duration-300 ease-in-out`}
                    style={{
                        width: `${100 - index * 20}%`, // Reduce width per layer
                        left: `${index * 10}%`, // Center each layer horizontally
                        bottom: `${index * 40}px`, // Stack layers vertically
                    }}
                >
                    <text>

                        {layer.label}
                    </text>
                    <div className="italic hover" >
                        {layer.hoverableTextPart}
                    </div>
                </div>

            ))}
        </div>
    );
};

export default Pyramid;
