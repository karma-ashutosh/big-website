import React from "react";
import { BlogPreviewProps } from "@/components/constants.ts";

const BlogPreview: React.FC<BlogPreviewProps> = ({ featuredBlog, allBlogsLink }) => {
    return (
        <div className="relative flex flex-col items-center text-center px-4 py-6 bg-transparent bg-opacity-65 border-l border-gray-300 last:border-r-0 md:last:border-r-0">
            {/* Semi-Transparent Background */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>

            {/* Content Layer */}
            <div className="relative z-10">
                {/* Blog Section Heading */}
                <h2 className="text-xl font-bold uppercase text-white mb-4">
                    Our Blog
                </h2>

                {/* Blog Image */}
                <div className="overflow-hidden rounded-md mb-4">
                    <img
                        src={featuredBlog.imageUrl}
                        alt={featuredBlog.title}
                        className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Blog Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{featuredBlog.title}</h3>

                {/* Blog Excerpt with Inline Read More Link */}
                <p className="text-gray-200 leading-relaxed">
                    {featuredBlog.excerpt}
                    <a
                        href={featuredBlog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline ml-2"
                    >
                        Read More
                    </a>
                </p>

                {/* View All Blogs Button */}
                <a
                    href={allBlogsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-6 rounded-full text-sm font-semibold shadow transition duration-300 inline-block"
                >
                    View All Blogs
                </a>
            </div>
        </div>
    );
};

export default BlogPreview;
