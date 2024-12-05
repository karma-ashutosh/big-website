import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-footer py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Copyright and Contact Info */}
                    <div className="w-full md:w-1/3 mb-6">
                        <p className="text-sm text-gray-600">&copy; Copyright 2023 Sahjeevan. All Rights Reserved.</p>
                        <h3 className="mt-4 text-lg font-semibold">Sahjeevan</h3>
                        <address className="text-sm text-gray-600">
                            175 - Jalaram Society, B/h. Vishwamangal Apartment, Vijaynagar,<br />
                            Bhuj - 370001, Kachchh, Gujarat.
                        </address>
                        <div className="mt-4 text-gray-600">
                            <div className="flex items-center mb-2">
                                <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5.75C3 5.06 3.56 4.5 4.25 4.5h15.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H4.25c-.69 0-1.25-.56-1.25-1.25V5.75zm2.17.25h1.91v2.01h-1.91V6zm0 3.25h1.91v7.5H5.17v-7.5zm14 0v7.5h-1.91v-7.5h1.91zm-8.63 0H9.81v7.5h.73c.4 0 .73-.33.73-.73V9.23c0-.4-.33-.73-.73-.73zm4.04 7.5h-1.73V6h1.73v7.75zm4.38 0h-1.91v-7.5h1.91v7.5z"></path>
                                </svg>
                                <span>02832 251814</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.75 2H2.25A2.25 2.25 0 000 4.25v15.5A2.25 2.25 0 002.25 22h19.5A2.25 2.25 0 0024 19.75V4.25A2.25 2.25 0 0021.75 2zM2.25 19.75V4.25h19.5v15.5H2.25zm12.63-11.5L12 12.38 9.12 8.25H7.88L12 15l4.12-6.75h-1.24z"></path>
                                </svg>
                                <a href="mailto:sahjeevan@gmail.com" className="text-gray-600 hover:underline">sahjeevan@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    {/* Ecosystem and Social Links */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h3 className="text-lg font-semibold">The Sahjeevan Ecosystem:</h3>
                        <div className="flex items-center space-x-4 mt-4">
                            {/* Logos here */}
                            <img src="https://sahjeevan.org/wp-content/uploads/2023/03/Frame-118.png" alt="Centre for Pastoralism" className="h-12" />
                            <img src="https://sahjeevan.org/wp-content/uploads/2023/03/logo-horizontal-1.png" alt="Ramble" className="h-12" />
                            <img src="https://sahjeevan.org/wp-content/uploads/2023/03/LL_logo_lowres-1.png" alt="Living Lightly" className="h-12" />
                            <img src="https://sahjeevan.org/wp-content/uploads/2023/03/DESI-OON-Final-Logo-Brown-11.png" alt="Desi Oon" className="h-12" />
                        </div>
                    </div>
                    {/* Social Media */}
                    <div className="w-full md:w-1/3 mb-6"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
