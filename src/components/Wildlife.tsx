import React from "react";
import {imageNames} from "./constants";
const WildlifeSection: React.FC = () => {
    return (
        <div className="bg-gray-100 py-8 px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Wildlife & Wild Places</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                    <img src={imageNames.BANNI_GRASSLAND_1} alt="Bison" className="w-full h-auto rounded-md" />
                    <h3 className="mt-4 text-lg font-semibold">Bison</h3>
                    <span className="text-purple-500 font-bold text-lg">›</span>
                </div>
                <div className="text-center">
                    <img src={imageNames.HAPPY_WITH_COWS} alt="Great Plains" className="w-full h-auto rounded-md" />
                    <h3 className="mt-4 text-lg font-semibold">Great Plains</h3>
                    <span className="text-purple-500 font-bold text-lg">›</span>
                </div>
                <div className="text-center">
                    <img src={imageNames.GOAT_OPTIMISTIC} alt="Owls" className="w-full h-auto rounded-md" />
                    <h3 className="mt-4 text-lg font-semibold">Owls</h3>
                    <span className="text-purple-500 font-bold text-lg">›</span>
                </div>
                <div className="text-center">
                    <img src={imageNames.PEOPLE_WALKING_WITH_ANIMALS} alt="Deciduous Forests" className="w-full h-auto rounded-md" />
                    <h3 className="mt-4 text-lg font-semibold">Deciduous Forests</h3>
                    <span className="text-purple-500 font-bold text-lg">›</span>
                </div>
            </div>
        </div>
    );
};

export default WildlifeSection;
