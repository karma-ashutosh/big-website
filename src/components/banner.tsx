import { Button } from "@/components/ui/button";
import DonationButton from "@/components/DonateButton.tsx";
import { useState } from "react";
import Modal from "react-modal";

export default function Banner() {
    const [isYoutubeModalOpen, setIsYoutubeModalOpen] = useState(false);

    const openYoutubeModal = () => {
        setIsYoutubeModalOpen(true);
    };

    const closeYoutubeModal = () => {
        setIsYoutubeModalOpen(false);
    };

    return (
        <div className="bg-background relative">
            {/* Adding padding to account for the navbar height */}
            <div className="pt-16">
                {/* Hero Section */}
                <div className="relative h-[75vh] overflow-hidden flex items-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://sahjeevan.org/wp-content/uploads/2023/04/Slider6-1-min.png')",
                        }}
                    />
                    <div className="absolute inset-0 bg-black/30" />

                    <div className="relative container mx-auto px-4 h-full flex items-center justify-between">
                        {/* Left Side - Text and Buttons */}
                        <div className="flex flex-col items-start space-y-6 text-white">
                            <h1 className="text-4xl
                            {/*md:text-4xl */}
                            {/*lg:text-7xl */}
                            font-bold tracking-wide">
                                Ecosystem-based Conservation
                            </h1>
                            <p className="text-xl">
                                Protect nature, <br/> Defend life.
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

                        {/* Right Side - Video Placeholder with Play Button */}
                        <div className="w-full
                        {/*md:w-1/2 */}
                        flex justify-center items-center">
                            <div className="relative group w-max/2 h-max
                            {/*rounded-full */}
                            overflow-hidden flex items-center justify-center shadow-lg">
                                <iframe
                                    src="https://player.vimeo.com/video/1043997078?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                    width="720" height="405" frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                    title="Sahjeevan ka video"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* YouTube Video Modal */}
            <Modal
                isOpen={isYoutubeModalOpen}
                onRequestClose={closeYoutubeModal}
                contentLabel="Watch Video"
                className="fixed inset-0 flex items-center justify-center p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-90"
                shouldCloseOnOverlayClick={true}
            >
                <div className="relative w-full max-w-3xl bg-white rounded-md shadow-lg">
                    <button
                        onClick={closeYoutubeModal}
                        className="absolute top-0 right-0 m-4 text-black text-3xl font-bold focus:outline-none z-50"
                    >
                        &times;
                    </button>
                    <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-md"
                            src="https://www.youtube.com/embed/VupuiZaCPCw"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </Modal>

        </div>
    );
}
