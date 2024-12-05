import {Button} from "@/components/ui/button"
import DonationButton from "@/components/DonateButton.tsx";
import NavBar from "@/components/NavBar.tsx";

export default function Banner() {
    return (
        <div className="bg-background relative">
            {/* Navigation Bar */}
            <NavBar/>

            {/* Hero Section */}
            <div className="relative h-[75vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://sahjeevan.org/wp-content/uploads/2023/04/Slider6-1-min.png')",
                    }}
                />
                <div className="absolute inset-0 bg-black/30"/>
                <div className="relative h-full flex items-center justify-center text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-wide">
                            BE A VOICE<br/>FOR WILDLIFE
                        </h1>
                        <p className="text-xl text-white mb-8">
                            Prevent extinction. Protect habitat. Defend nature.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                                JOIN US
                            </Button>
                            <DonationButton/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

