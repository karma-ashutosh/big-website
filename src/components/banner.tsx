import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect';
import DonationButton from "@/components/DonateButton.tsx";
import EventSliderOnly from "@/components/events-grid.tsx";

export default function Banner() {
    return (
        <div className="w-full pt-16">
            {/* Hero Section - two columns side by side */}
            <div className="flex flex-col md:flex-row h-[75vh]">
                {/* Left Half: White (or near-white) background, text content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-8 bg-[#f9f9f9] text-gray-900">
                    <h1 className="text-2xl font-bold tracking-wide mb-4">
                        We Thrive for
                    </h1>
                    <h1 className="text-4xl font-bold tracking-wide mb-4">
                        Ecosystem-based Conservation
                    </h1>
                    <p className="text-xl mb-6">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Protect nature,<br/>Defend life.')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2500)
                                    // .deleteAll()
                                    // .callFunction(() => {
                                    //     console.log('All strings were deleted');
                                    // })
                                    .start();
                            }}
                            options={{

                            }}
                        />
                    </p>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            className="bg-white text-gray-900 hover:bg-gray-100"
                        >
                            JOIN US
                        </Button>
                        <DonationButton donationButtonText="Support Us"/>
                    </div>
                </div>

                {/* Right Half: Slider with full height */}
                <div className="w-full md:w-1/2 h-full">
                    <EventSliderOnly/>
                </div>
            </div>
        </div>
    );
}
