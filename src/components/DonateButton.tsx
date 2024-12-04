"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {ProfileForm} from "@/components/donation-form.tsx";

const DonationButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Donation Form</Button>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
                        >
                            &times;
                        </button>
                        {/* Call the ProfileForm here */}
                        <ProfileForm />
                    </div>
                </div>
            )}
        </>
    );
};
export default DonationButton;