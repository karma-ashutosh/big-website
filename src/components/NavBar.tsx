import { Component } from "react";
import { Button } from "@/components/ui/button";
import DonationButton from "@/components/DonateButton";
import SearchBarComponent from "@/components/SearchBar";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

interface NavBarState {
    isMobileMenuOpen: boolean;
}

class NavBar extends Component<{}, NavBarState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isMobileMenuOpen: false,
        };
    }

    toggleMobileMenu = () => {
        this.setState((prevState) => ({
            isMobileMenuOpen: !prevState.isMobileMenuOpen,
        }));
    };

    closeMobileMenu = () => {
        this.setState({ isMobileMenuOpen: false });
    };

    render() {
        const { isMobileMenuOpen } = this.state;

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

                        {/* Language Selector and Donate Button */}
                        <div className="flex items-center gap-4">
                            <select className="bg-transparent text-white border-none focus:ring-0">
                                <option value="en">ENGLISH</option>
                                <option value="hi">हिन्दी</option>
                                <option value="gu">ગુજરાતી</option>
                            </select>
                            <DonationButton />
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-2 bg-[#2f2f2f] text-white shadow-lg rounded-md py-4 px-4">
                            <Button asChild>
                                <a
                                    href="https://google.com"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={this.closeMobileMenu}
                                >
                                    Wildlife
                                </a>
                            </Button>
                            <Button asChild>
                                <a
                                    href="#"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={this.closeMobileMenu}
                                >
                                    Our Work
                                </a>
                            </Button>
                            <Button asChild>
                                <a
                                    href="#"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={this.closeMobileMenu}
                                >
                                    Take Action
                                </a>
                            </Button>
                            <Button asChild>
                                <a
                                    href="#"
                                    className="block py-2 text-white hover:text-white/80"
                                    onClick={this.closeMobileMenu}
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
