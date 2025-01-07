// NavBar.tsx

import { useState, FC } from "react";
import Modal from "react-modal";
import DonationButton from "@/components/DonateButton";
import SearchBarComponent from "@/components/SearchBar";
import {
    Menu,
    X,
    Instagram,
    Facebook,
    Youtube as YoutubeIcon,
    Linkedin,
} from "lucide-react";
import ZoomableMapDashboard from "./map-ux/zoomable-map-ux";

interface MenuItemType {
    title: string;
    link?: string;
    action?: () => void;
    subMenus?: MenuItemType[];
}
/**
 * Example nested menu data.
 */
const menuItems: MenuItemType[] = [
    {
        title: "About",
        subMenus: [
            {
                title: "Who We Are",
                subMenus: [
                    {
                        title: "Our Approach",
                        subMenus: [
                            { title: "Communities", link: "#" },
                            { title: "Institutions", link: "#" },
                            { title: "Advocacy", link: "#" },
                        ],
                    },
                ],
            },
            {
                title: "Our Story",
                subMenus: [
                    {
                        title: "Our Ecosystem",
                        subMenus: [
                            { title: "Our Team", link: "#" },
                            { title: "Our Board", link: "#" },
                            { title: "Our Partners", link: "#" },
                        ],
                    },
                ],
            },
            { title: "Our Mission & Vision", link: "#", },
        ],
    },
    {
        title: "Issues We Work on",
        subMenus: [
            { title: "Our Team", link: "#" },
            { title: "Board Members", link: "#" },
            { title: "Our Partners", link: "#" },
            { title: "Donors", link: "#" },
        ]
        // link: "",
        // action: () => {
        //     // Define the action to open the map modal
        //     // This will be passed from the NavBar component
        // },
    },
    {
        title: "Resources",
        subMenus: [
            //, , Blog, , ,
            { title: "News", link: "#" },
            { title: "Publications", link: "#" },
            { title: "Blog", link: "#" },
            { title: "Statutory Documents", link: "#" },
            { title: "Photo Gallery", link: "#" },
            { title: "Archive", link: "#" },
        ]
    },
    {
        title: "Take Action",
        subMenus: [
            { title: "Join Us", link: "#" },
            { title: "Support Us", link: "#" },
            { title: "Become a Volunteer", link: "#" },
            { title: "Attend an Event", link: "#" },
            { title: "Attend an Event", link: "#" },
            { title: "Get Email Alerts", link: "#" },
            { title: "Contact Us", link: "#" },
        ]
    },
];

/**
 * Props for the MenuItem component.
 */
interface MenuItemProps {
    item: MenuItemType;
    level?: number;
    action?: () => void;
}

/**
 * Recursively renders a single menu item and its (optional) submenus.
 *
 * @param props The props for the MenuItem component.
 */
const MenuItem: FC<MenuItemProps> = ({ item, level = 0, action }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const hasSubMenus: boolean = !!(item.subMenus && item.subMenus.length > 0);

    // Position top-level menus directly below, deeper levels to the right
    const positionClass: string =
        level === 0 ? "top-full left-0" : "top-0 left-full";

    // Add no extra margin between parent & child (omit mt-2)
    const submenuClasses: string = `
    absolute
    bg-white
    shadow-lg
    rounded-md
    min-w-[180px]
    ${isHovered ? "block" : "hidden"}
    ${positionClass}
  `;

    return (
        <li
            className="relative px-4 py-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {hasSubMenus ? (
                <>
                    <button
                        type="button"
                        className="hover:text-gray-600 focus:outline-none"
                    >
                        {item.title}
                    </button>

                    {/* Nested submenu: only visible if hovered */}
                    <ul
                        className={submenuClasses}
                        style={{ zIndex: 9999 }} // ensure the submenu appears on top
                    >
                        {item.subMenus?.map((child, idx) => (
                            <MenuItem
                                key={idx}
                                item={child}
                                level={level + 1}
                                action={action}
                            />
                        ))}
                    </ul>
                </>
            ) : item.action ? (
                <button
                    type="button"
                    className="hover:text-gray-600 focus:outline-none"
                    onClick={action}
                >
                    {item.title}
                </button>
            ) : (
                <a href={item.link || "#"} className="block hover:text-gray-600">
                    {item.title}
                </a>
            )}
        </li>
    );
};

/**
 * Props for the TopLevelMenu component.
 */
interface TopLevelMenuProps {
    items: MenuItemType[];
    modalAction?: () => void;
}

/**
 * Renders the top-level menu items in a horizontal row (typical desktop).
 */
const TopLevelMenu: FC<TopLevelMenuProps> = ({ items, modalAction }) => {
    return (
        <ul className="flex items-center gap-6 relative">
            {items.map((item, i) => (
                <MenuItem key={i} item={item} action={modalAction} />
            ))}
        </ul>
    );
};

const NavBar: FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isProjectMapOpen, setIsProjectMapOpen] = useState<boolean>(false);

    const setProjectMapOpen = () => setIsProjectMapOpen(true);
    const setProjectMapClose = () => setIsProjectMapOpen(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    return (
        <>
            {/* Main Nav */}
            <nav className="absolute top-0 left-0 right-0 z-10 bg-white text-black shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="/" className="flex items-center">
                            <img
                                fetchPriority="high"
                                width="auto"
                                height="auto"
                                src="https://sahjeevan.org/wp-content/uploads/2023/03/logo.png"
                                className="h-14 w-auto object-contain"
                                alt="Sahjeevan Logo"
                            />
                        </a>

                        {/* Optionally, put a mobile search bar here */}
                        <div className="mt-0">
                            <SearchBarComponent />
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden md:flex">
                            <TopLevelMenu items={menuItems} modalAction={setProjectMapOpen} />
                        </div>

                        {/* Right side: mobile toggle, language selector, donate, etc. */}
                        <div className="flex items-center gap-4">
                            {/* Search Bar (desktop) */}

                            {/* Mobile Hamburger Menu */}
                            <div className="md:hidden">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="text-black focus:outline-none"
                                    aria-label="Toggle mobile menu"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="w-6 h-6" />
                                    ) : (
                                        <Menu className="w-6 h-6" />
                                    )}
                                </button>
                            </div>

                            {/* Language Selector */}
                            <select
                                className="bg-gray-100 text-black border-none rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-gray-300"
                                aria-label="Select language"
                            >
                                <option className="bg-white text-black" value="en">
                                    ENGLISH
                                </option>
                                <option className="bg-white text-black" value="hi">
                                    हिन्दी
                                </option>
                                <option className="bg-white text-black" value="gu">
                                    ગુજરાતી
                                </option>
                            </select>

                            {/* Donate Button */}
                            <DonationButton />
                        </div>
                    </div>

                    {/* Mobile Menu (collapsible) */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden bg-white text-black shadow-lg rounded-md py-4 px-4 mt-2">
                            {/* We can reuse the same recursive menu for mobile,
                  but often you might do a simpler, accordion-style layout. */}
                            <TopLevelMenu items={menuItems} modalAction={setProjectMapOpen} />
                        </div>
                    )}
                </div>
            </nav>

            {/* Vertical Social Media Banner */}
            <div className="fixed right-0 top-1/3 flex flex-col items-center space-y-4 bg-[#2f2f2f] p-2 shadow-lg rounded-l-md">
                <a
                    href="https://www.instagram.com/sahjeevan_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                    aria-label="Instagram"
                >
                    <Instagram className="w-6 h-6" />
                </a>
                <a
                    href="https://www.facebook.com/p/Sahjeevan-100069508025502/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                    aria-label="Facebook"
                >
                    <Facebook className="w-6 h-6" />
                </a>
                <a
                    href="https://youtube.com/@sahjeevankutch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                    aria-label="YouTube"
                >
                    <YoutubeIcon className="w-6 h-6" />
                </a>
                <a
                    href="https://in.linkedin.com/company/sahjeevan-organization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://x.com/sahjeevan_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                    aria-label="X"
                >
                    <X className="w-6 h-6" />
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
                ariaHideApp={false} // You might want to set this based on your app's requirements
            >
                <div className="relative w-full h-full">
                    <button
                        onClick={setProjectMapClose}
                        className="absolute top-4 right-4 text-black text-3xl font-bold focus:outline-none z-[2147483647]"
                        aria-label="Close modal"
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
