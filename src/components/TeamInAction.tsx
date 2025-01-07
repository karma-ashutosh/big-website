import React from "react";
import {ProgramPartners, Funders} from "@/components/constants.ts";

const TeamInAction: React.FC = () => {
    return (
        <div className="bg-white py-8 px-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Team in Action
            </h1>

            {/* Grid Container */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Partners Section */}
                <div className="bg-white border border-gray-200 rounded">
                    <h2 className="text-xl font-semibold px-4 pt-4 pb-2 text-gray-700">
                        Partners
                    </h2>
                    <div className="overflow-y-auto max-h-48">
                        <ul>
                            {
                                ProgramPartners.map(partner => {
                                    return (
                                        <li className="border-b border-gray-200 px-4 py-2 text-gray-700 last:border-none">
                                            {partner.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {/* Founders Section */}
                <div className="bg-white border border-gray-200 rounded">
                    <h2 className="text-xl font-semibold px-4 pt-4 pb-2 text-gray-700">
                        Funders
                    </h2>
                    <div className="overflow-y-auto max-h-48">
                        <ul>
                            {
                                Funders.map(funder => {
                                    return (
                                        <li className="border-b border-gray-200 px-4 py-2 text-gray-700 last:border-none">
                                            {funder.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {/* Our Tech Section */}
                <div className="bg-white border border-gray-200 rounded">
                    <h2 className="text-xl font-semibold px-4 pt-4 pb-2 text-gray-700">
                        Our Team
                    </h2>
                    <div className="overflow-y-auto max-h-48">
                        <ul>
                            <li className="border-b border-gray-200 px-4 py-2 text-gray-700 last:border-none">
                                Board Members
                            </li>
                            <li className="border-b border-gray-200 px-4 py-2 text-gray-700 last:border-none">
                                Tech Team
                            </li>
                            <li className="border-b border-gray-200 px-4 py-2 text-gray-700 last:border-none">
                                Full-stack Devs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamInAction;
