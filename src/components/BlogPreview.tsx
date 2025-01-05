import {imageNames} from "@/components/constants.ts";

export const DefaultBlogPreview: BlogPreviewProps = {
    featuredBlog: {
        title: "Save humans",
        excerpt: "Save humans to create humans",
        imageUrl: imageNames.SHEEPLINGS_SLEEPING,
        link: "https://news.google.com/1",
    },
    allBlogsLink: "https://news.google.com/2",
}
import React from "react";

interface BlogPreviewProps {
    featuredBlog: {
        title: string;
        excerpt: string;
        imageUrl: string;
        link: string;
    };
    allBlogsLink: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ featuredBlog, allBlogsLink }) => {
    return (
        <div className="flex flex-col items-center text-center px-4 py-6 bg-transparent bg-opacity-65 border-l border-gray-300 last:border-r-0 md:last:border-r-0">
            {/* Blog Image */}
            <h2>
                our blog
            </h2>
            <div className="overflow-hidden rounded-md mb-4">
                <img
                    src={featuredBlog.imageUrl}
                    alt={featuredBlog.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
            </div>

            {/* Blog Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{featuredBlog.title}</h3>

            {/* Blog Excerpt */}
            <p className="text-gray-600 mb-4 leading-relaxed">{featuredBlog.excerpt}</p>

            {/* Read More Button */}
            <a
                href={featuredBlog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-sm font-semibold shadow transition duration-300 inline-block mb-4"
            >
                Read More...
            </a>

            {/* View All Blogs Button */}
            <a
                href={allBlogsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-6 rounded-full text-sm font-semibold shadow transition duration-300"
            >
                View All Blogs
            </a>
        </div>
    );
};

export default BlogPreview;

