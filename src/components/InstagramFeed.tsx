import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramEventsGrid() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Replace with your own post URLs
    const instagramPosts = [
        'https://www.instagram.com/p/DDPWNdgvQNd/',
        'https://www.instagram.com/p/DAslwx4yroB/',
        'https://www.instagram.com/p/DAslwx4yroB/',
        'https://www.instagram.com/p/DAslwx4yroB/',
        'https://www.instagram.com/p/DDPWNdgvQNd/',
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`
        relative z-10 container mx-auto px-4 mb-8 
        transition-all duration-300
        ${isScrolled ? 'mt-8' : '-mt-4'}
      `}
        >
            {/* Diagonal Banner + Heading */}
            <div className="mb-6 text-center flex flex-col items-center">
                <div className="relative inline-block transform rotate-2 bg-gradient-to-bl from-purple-600 to-purple-700 shadow-lg">
                    <h2 className="text-white font-bold text-3xl md:text-4xl uppercase px-8 py-4 transform -rotate-1">
                        Instagram Feed
                    </h2>
                </div>

                <p className="mt-3 max-w-xl mx-auto text-gray-600 md:text-base px-4">
                    Scroll through our latest posts to see what we’ve been up to!
                </p>
            </div>

            {/* Horizontal Scroller of Embeds */}
            <div className="flex space-x-4 overflow-x-auto px-2 py-2">
                {instagramPosts.map((postUrl, idx) => (
                    <div key={idx} className="flex-shrink-0">
                        {/*
              Allow the InstagramEmbed to control most of its own styling so it looks
              "native Instagram." We only set width to ensure a consistent row layout.
            */}
                        <InstagramEmbed
                            url={postUrl}
                            width={320}
                            // Optionally specify a height or hideCaption, etc.
                            title="See what we've been upto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
