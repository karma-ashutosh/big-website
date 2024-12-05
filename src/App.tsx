import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Banner from "@/components/banner";
import ImageGrid from "@/components/image-grid";
import { ImageCarousel } from "@/components/carousel-row";
import Footer from "@/components/footer";
import GujratBanner from "@/components/GujratBanner";

import { FC, ReactNode } from "react";
import BlogPage, {blogData, titleToBlogUrl} from "@/components/Blog.tsx";

interface ParallaxBackgroundProps {
    backgroundUrl: string;
    children: ReactNode;
}

const ParallaxBackground: FC<ParallaxBackgroundProps> = ({ backgroundUrl, children }) => {
    return (
        <div className="relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute top-0 left-0 w-full h-full z-15 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundUrl})`,
                    backgroundAttachment: "fixed",
                }}
            />
            {/* Foreground Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

function App() {
    return (
        <Router>
            {/* Navigation Bar */}
            <nav className="bg-[#2f2f2f] text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-lg font-semibold hover:text-orange-500 transition-colors">Home</Link>
                    <div className="flex items-center gap-4">
                        {blogData.map((blog, index) => (
                            <Link
                                key={index}
                                to={`${titleToBlogUrl(blog.title)}`}
                                className="text-base hover:text-orange-500 transition-colors"
                            >
                                {blog.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="bg-footer relative">
                            <Banner />
                            <ParallaxBackground backgroundUrl="https://sahjeevan.org/wp-content/uploads/2023/03/map-marker-1.png">
                                <ImageGrid />
                                <GujratBanner />
                                <ImageCarousel />
                            </ParallaxBackground>
                            <Footer />
                        </div>
                    }
                />
                {blogData.map((blog, index) => (
                    <Route
                        key={index}
                        path={titleToBlogUrl(blog.title)}
                        element={
                            <BlogPage
                                title={blog.title}
                                paragraphs={blog.paragraphs}
                                images={blog.images}
                            />
                        }
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
