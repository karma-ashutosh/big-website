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
                            <img src="path/to/centre-for-pastoralism.png" alt="Centre for Pastoralism" className="h-12" />
                            <img src="path/to/ramble.png" alt="Ramble" className="h-12" />
                            <img src="path/to/living-lightly.png" alt="Living Lightly" className="h-12" />
                            <img src="path/to/desi-oon.png" alt="Desi Oon" className="h-12" />
                        </div>
                    </div>
                    {/* Social Media */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h3 className="text-lg font-semibold">Follow us on Instagram:</h3>
                        <p className="text-sm text-gray-600">[instagram-feed feed=1]</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.348 3.608 1.323.975.975 1.261 2.242 1.323 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.348 2.633-1.323 3.608-.975.975-2.242 1.261-3.608 1.323-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.348-3.608-1.323-.975-.975-1.261-2.242-1.323-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.348-2.633 1.323-3.608C4.531 2.51 5.798 2.225 7.163 2.163 8.429 2.105 8.809 2.163 12 2.163zm0-2.163C8.691 0 8.258.015 7.003.072 5.628.137 4.345.384 3.268 1.46 2.192 2.537 1.944 3.82 1.878 5.197c-.057 1.256-.072 1.688-.072 5.803s.015 4.547.072 5.803c.066 1.377.314 2.66 1.39 3.737 1.077 1.077 2.36 1.324 3.737 1.39 1.256.057 1.688.072 5.803.072s4.547-.015 5.803-.072c1.377-.066 2.66-.314 3.737-1.39 1.077-1.077 1.324-2.36 1.39-3.737.057-1.256.072-1.688.072-5.803s-.015-4.547-.072-5.803c-.066-1.377-.314-2.66-1.39-3.737C20.96.384 19.677.137 18.3.072 17.045.015 16.612 0 12 0z"></path>
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.656-4.788 1.325 0 2.463.099 2.795.144v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
