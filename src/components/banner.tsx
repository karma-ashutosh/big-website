
import { Button } from "@/components/ui/button"
import {Link} from "lucide-react";
import {ImageCarousel} from "@/components/carousel-row.tsx";

export default function Banner() {
    return (
        <div className="relative">
            {/* Navigation Bar */}
            <nav className="absolute top-0 left-0 right-0 z-10 bg-black/20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-8">
                            <Link href="/" className="text-white font-semibold">
                                Logo
                            </Link>
                            <div className="hidden md:flex items-center gap-6">
                                <Link href="#" className="text-white hover:text-white/80">
                                    Wildlife
                                </Link>
                                <Link href="#" className="text-white hover:text-white/80">
                                    Wild Places
                                </Link>
                                <Link href="#" className="text-white hover:text-white/80">
                                    Our Work
                                </Link>
                                <Link href="#" className="text-white hover:text-white/80">
                                    Take Action
                                </Link>
                                <Link href="#" className="text-white hover:text-white/80">
                                    Support
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <select className="bg-transparent text-white border-none focus:ring-0">
                                <option value="en">ENGLISH</option>
                                <option value="es">ESPAÑOL</option>
                            </select>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                DONATE
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative h-[85vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://sahjeevan.org/wp-content/uploads/2023/04/Slider6-1-min.png')",
                    }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative h-full flex items-center justify-center text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-wide">
                            BE A VOICE<br />FOR WILDLIFE
                        </h1>
                        <p className="text-xl text-white mb-8">
                            Prevent extinction. Protect habitat. Defend nature.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                                JOIN US
                            </Button>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                DONATE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Cards */}
            <div className="container mx-auto px-4 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-[4/3] relative overflow-hidden rounded-lg">
                            <div
                                className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                                style={{
                                    backgroundImage: `url('https://sahjeevan.org/wp-content/uploads/2023/04/Slider3-en-4.png')`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <ImageCarousel />
        </div>
    )
}

