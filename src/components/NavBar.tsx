import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@/components/ui/button";
import DonationButton from "@/components/DonateButton";
import SearchBarComponent from "@/components/SearchBar";
import { Menu, X, Instagram, Facebook, YoutubeIcon, Linkedin } from "lucide-react";
import ZoomableMapDashboard from "./map-ux/zoomable-map-ux";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProjectMapOpen, setIsProjectMapOpen] = useState(false);

    const setProjectMapOpen = () => setIsProjectMapOpen(true);
    const setProjectMapClose = () => setIsProjectMapOpen(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-10 bg-[#2f2f2f] text-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo and Search Bar */}
                        <div className="flex items-center gap-8">
                            <div className="flex items-center">
                                <img
                                    fetchPriority="high"
                                    width="auto"
                                    height="auto"
                                    src="https://sahjeevan.org/wp-content/uploads/2023/03/logo.png"
                                    className="h-20 w-auto object-contain"
                                    alt="Sahjeevan Logo"
                                    srcSet="https://sahjeevan.org/wp-content/uploads/2023/03/logo.png 245w, https://sahjeevan.org/wp-content/uploads/2023/03/logo-150x150.png 150w, https://sahjeevan.org/wp-content/uploads/2023/03/logo-100x100.png 100w, https://sahjeevan.org/wp-content/uploads/2023/03/logo-200x200.png 200w"
                                    sizes="(max-width: 245px) 100vw, 245px"
                                />
                            </div>
                        </div>
                        <SearchBarComponent/>

                        {/* Menu */}
                        <div className="flex items-center gap-8">
                            <div className="hidden md:flex items-center gap-6">
                                <Button asChild>
                                    <a href="https://google.com" className="text-white hover:text-white/80">
                                        Wildlife
                                    </a>
                                </Button>
                                <Button asChild>
                                    <button onClick={setProjectMapOpen}>
                                        Our Work
                                    </button>
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

                            {/* Mobile Hamburger Menu */}
                            <div className="md:hidden">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="text-white focus:outline-none"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="w-6 h-6"/>
                                    ) : (
                                        <Menu className="w-6 h-6"/>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Language Selector and Donate Button */}
                        <div className="flex items-center gap-4">
                            {/* Language Selector */}
                            <select
                                className="bg-gray-200 text-gray-800 border-none rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-gray-300">
                                <option className="bg-white text-black" value="en">ENGLISH</option>
                                <option className="bg-white text-black" value="hi">हिन्दी</option>
                                <option className="bg-white text-black" value="gu">ગુજરાતી</option>
                            </select>

                            {/* Donate Button */}
                            <DonationButton />
                        </div>

                    </div>

                    {/* Mobile Dropdown Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-2 bg-[#2f2f2f] text-white shadow-lg rounded-md py-4 px-4">
                            <Button asChild>
                                <a href="https://google.com" className="block py-2 text-white hover:text-white/80"
                                   onClick={toggleMobileMenu}>
                                    Wildlife
                                </a>
                            </Button>
                            <Button asChild>
                                <a href="#" className="block py-2 text-white hover:text-white/80" onClick={toggleMobileMenu}>
                                    Our Work
                                </a>
                            </Button>
                            <Button asChild>
                                <a href="#" className="block py-2 text-white hover:text-white/80" onClick={toggleMobileMenu}>
                                    Take Action
                                </a>
                            </Button>
                            <Button asChild>
                                <a href="#" className="block py-2 text-white hover:text-white/80" onClick={toggleMobileMenu}>
                                    Support
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Vertical Social Media Banner */}
            <div
                className="fixed right-0 top-1/3 flex flex-col items-center space-y-4 bg-[#2f2f2f] p-2 shadow-lg rounded-l-md">
                <a
                    href="https://www.instagram.com/sahjeevan_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                >
                    <Instagram className="w-6 h-6"/>
                </a>
                <a
                    href="https://www.facebook.com/p/Sahjeevan-100069508025502/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                >
                    <Facebook className="w-6 h-6"/>
                </a>
                <a
                    href="https://www.youtube.com/@sahjeevankutch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                >
                    <YoutubeIcon className="w-6 h-6"/>
                </a>
                <a
                    href="https://in.linkedin.com/company/sahjeevan-organization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                >
                    <Linkedin className="w-6 h-6"/>
                </a>
                <a
                    href="https://x.com/sahjeevan_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                >
                    <X className="w-6 h-6"/>
                </a>
            </div>

            {/* Map Modal */}
            <Modal
                isOpen={isProjectMapOpen}
                onRequestClose={setProjectMapClose}
                contentLabel="Sahjeevan Work"
                className="ReactModal__Content fixed inset-0 flex items-center justify-center bg-white z-[2147483647] outline-none"
                overlayClassName="ReactModal__Overlay fixed inset-0 bg-black bg-opacity-90 z-[2147483646]"
                shouldCloseOnOverlayClick={true}
            >
                <div className="relative w-full h-full">
                    <button
                        onClick={setProjectMapClose}
                        className="absolute top-4 right-4 text-black text-3xl font-bold focus:outline-none z-[2147483647]"
                    >
                        &times;
                    </button>
                    <div className="absolute inset-0 w-full h-full">
                        <ZoomableMapDashboard />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default NavBar;
