import { Component } from "react";
import { Button } from "@/components/ui/button";
import DonationButton from "@/components/DonateButton";
import SearchBarComponent from "@/components/SearchBar";
import { Menu, X, Instagram, Facebook, YoutubeIcon } from "lucide-react"; // Import icons from lucide-react

interface NavBarState {
    isMobileMenuOpen: boolean;
    isSocialBannerOpen: boolean;
}

class NavBar extends Component<{}, NavBarState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isMobileMenuOpen: false,
            isSocialBannerOpen: false,
        };
    }

    toggleMobileMenu = () => {
        this.setState((prevState) => ({
            isMobileMenuOpen: !prevState.isMobileMenuOpen,
        }));
    };

    toggleSocialBanner = () => {
        this.setState((prevState) => ({
            isSocialBannerOpen: !prevState.isSocialBannerOpen,
        }));
    };

    render() {
        const { isMobileMenuOpen, isSocialBannerOpen } = this.state;

        return (
            <nav className="absolute top-0 left-0 right-0 z-10 bg-[#2f2f2f] text-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Search Bar */}
                        <SearchBarComponent />

                        {/* Logo */}
                        <div className="flex items-center gap-8">
                            <Button asChild>
                                <a href="/" className="text-white font-semibold">
                                    Logo
                                </a>
                            </Button>

                            {/* Desktop Menu Items */}
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

                            {/* Mobile Hamburger Menu Button */}
                            <div className="md:hidden">
                                <button
                                    onClick={this.toggleMobileMenu}
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
                            <select className="bg-transparent text-white border-none focus:ring-0">
                                <option value="en">ENGLISH</option>
                                <option value="hi">हिन्दी</option>
                                <option value="gu">ગુજરાતી</option>
                            </select>
                            <DonationButton />

                            {/* Social Media Icon Toggle */}
                            <button
                                onClick={this.toggleSocialBanner}
                                className="text-white focus:outline-none"
                            >
                                <Instagram className="w-6 h-6 hover:text-white/80" />
                            </button>

                            {/* Social Media Banner */}
                            {isSocialBannerOpen && (
                                <div
                                    className="absolute top-16 right-0 w-40 bg-[#2f2f2f] text-white shadow-lg rounded-md py-4 px-4 flex flex-col gap-2">
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-white/80"
                                    >
                                        <Instagram className="w-5 h-5"/>
                                        Instagram
                                    </a>
                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-white/80"
                                    >
                                        <Facebook className="w-5 h-5"/>
                                        Facebook
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@sahjeevankutch"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-white/80"
                                    >
                                        <YoutubeIcon className="w-5 h-5"/>
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
                                    onClick={this.toggleMobileMenu}
                                >
                                    Wildlife
                                </a>
                            </Button>
                            <Button asChild>
                                <a
                                    href="#"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={this.toggleMobileMenu}
                                >
                                    Our Work
                                </a>
                            </Button>
                            <Button asChild>
                                <a
                                    href="#"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={this.toggleMobileMenu}
                                >
                                    Take Action
                                </a>
                            </Button>
                            <Button asChild>
                                <a
                                    href="#"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={this.toggleMobileMenu}
                                >
                                    Support
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
        );
    }
}

export default NavBar;
