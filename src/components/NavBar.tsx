import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@/components/ui/button";
import DonationButton from "@/components/DonateButton";
import SearchBarComponent from "@/components/SearchBar";
import { Menu, X, Instagram, Facebook, YoutubeIcon } from "lucide-react";
import ZoomableMapDashboard from "./map-ux/zoomable-map-ux";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSocialBannerOpen, setIsSocialBannerOpen] = useState(false);

    const [isProjectMapOpen, setIsProjectMapOpen] = useState(false);
    const setProjectMapOpen = () => {
        setIsProjectMapOpen(true)
    }
    const setProjectMapClose = () => {
        setIsProjectMapOpen(false)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const toggleSocialBanner = () => {
        setIsSocialBannerOpen((prev) => !prev);
    };

    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-10 bg-[#2f2f2f] text-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Search Bar */}
                        <div className="flex items-center gap-8">
                          <div className="flex items-center">
    <img
      fetchpriority="high"
      width="auto"
      height="auto"
      src="https://sahjeevan.org/wp-content/uploads/2023/03/logo.png"
      className="h-20 w-auto object-contain"
      alt="Sahjeevan Logo"
      srcset="https://sahjeevan.org/wp-content/uploads/2023/03/logo.png 245w, https://sahjeevan.org/wp-content/uploads/2023/03/logo-150x150.png 150w, https://sahjeevan.org/wp-content/uploads/2023/03/logo-100x100.png 100w, https://sahjeevan.org/wp-content/uploads/2023/03/logo-200x200.png 200w"
      sizes="(max-width: 245px) 100vw, 245px"
    />
  </div>
  <div className="flex-grow"></div>
                        </div>
                        <SearchBarComponent />

                        {/* Logo */}
                        <div className="flex items-center gap-8">
                            {/* Desktop Menu Items */}
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

                            {/* Mobile Hamburger Menu Button */}
                            <div className="md:hidden">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="text-white focus:outline-none"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="w-6 h-6" />
                                    ) : (
                                        <Menu className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Language Selector, Donate Button, and Social Media Banner */}
                        <div className="flex items-center gap-4 relative">
                            <select className="bg-yellow-800 text-blue border-none focus:ring-0">
                                <option value="en">ENGLISH</option>
                                <option value="hi">हिन्दी</option>
                                <option value="gu">ગુજરાતી</option>
                            </select>
                            <DonationButton />

                            {/* Social Media Icon Toggle */}
                            <button
                                onClick={toggleSocialBanner}
                                className="text-white focus:outline-none"
                            >
                                <Instagram className="w-6 h-6 hover:text-white/80" />
                            </button>

                            {/* Social Media Banner */}
                            {isSocialBannerOpen && (
                                <div
                                    className="absolute top-16 right-0 w-40 bg-[#2f2f2f] text-white shadow-lg rounded-md py-4 px-4 flex flex-col gap-2"
                                >
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-white/80"
                                    >
                                        <Instagram className="w-5 h-5" />
                                        Instagram
                                    </a>
                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-white/80"
                                    >
                                        <Facebook className="w-5 h-5" />
                                        Facebook
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@sahjeevankutch"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-white/80"
                                    >
                                        <YoutubeIcon className="w-5 h-5" />
                                        YouTube
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-2 bg-[#2f2f2f] text-white shadow-lg rounded-md py-4 px-4">
                            <Button asChild>
                                <a
                                    href="https://google.com"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={toggleMobileMenu}
                                >
                                    Wildlife
                                </a>
                            </Button>
                            <Button asChild>
                                <a
                                    href="#"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={toggleMobileMenu}
                                >
                                    Our Work
                                </a>
                            </Button>
                            <Button asChild>
                                <a
                                    href="#"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={toggleMobileMenu}
                                >
                                    Take Action
                                </a>
                            </Button>
                            <Button asChild>
                                <a
                                    href="#"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={toggleMobileMenu}
                                >
                                    Support
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
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
