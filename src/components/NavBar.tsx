import {Component} from "react";
import {Button} from "@/components/ui/button"
import DonationButton from "@/components/DonateButton.tsx";

class NavBar extends Component {
    render() {
        return <nav className="absolute top-0 left-0 right-0 z-10 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Button asChild>
                            <a href="/" className="text-white font-semibold">
                                Logo
                            </a>
                        </Button>
                        <div className="hidden md:flex items-center gap-6">
                            <Button asChild>
                                <a href="https://google.com" className="text-white hover:text-white/80">
                                    Wildlife
                                </a>
                            </Button>
                            <Button asChild>
                                <a href="#" className="text-white hover:text-white/80">
                                    Our Work
                                </a>
                            </Button>
                            <Button asChild>
                                <a href="#" className="text-white hover:text-white/80">
                                    Take Action
                                </a>
                            </Button>
                            <Button asChild>
                                <a href="#" className="text-white hover:text-white/80">
                                    Support
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <select className="bg-transparent text-white border-none focus:ring-0">
                            <option value="en">ENGLISH</option>
                            <option value="es">हिन्दी</option>
                            <option value="es">ગુજરાતી</option>
                        </select>
                        <DonationButton/>
                    </div>
                </div>
            </div>
        </nav>;
    }
}
export default NavBar;