import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Banner from "@/components/banner";
// import ImageGrid from "@/components/image-grid";
import { ImageCarousel } from "@/components/carousel-row";
import Footer from "@/components/footer";
import GujratBanner from "@/components/GujratBanner";

import { FC, ReactNode } from "react";
import BlogPage, {blogData, titleToBlogUrl} from "@/components/Blog.tsx";
import NavBar from "@/components/NavBar.tsx";
import {imageNames, OurPartners, pressUpdates} from "@/components/constants.ts";
import EventsGrid from "@/components/events-grid.tsx";
// import ConcentricCircles from "@/components/ConcentricCircles.tsx";
import ImpactSection from "@/components/ImpactAndWork.tsx";
import SahjeevanWorkThemes from "@/components/SahjeevanThemes.tsx";
import WildlifeSection from "@/components/Wildlife.tsx";

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
            <div className="w-full fixed top-0 left-0 z-50 bg-[#2f2f2f] text-white shadow-md">
                <NavBar/>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="bg-footer relative">
                            <Banner/>
                            <ParallaxBackground
                                backgroundUrl={imageNames.HAPPY_WITH_COWS}>
                                {/*<ImageGrid/>*/}
                                <EventsGrid/>
                                <SahjeevanWorkThemes />
                                <ImpactSection />
                                <WildlifeSection />
                                <ImageCarousel carouselItems={OurPartners}
                                               designTemplate={"classic"}
                                                heading={"Our Partners"}
                                    subheading = {"Learn more about the organizations we collaborate with!"}
                                    headingDesign = {"purpleBanner"}
                                />
                                <ImageCarousel
                                    heading={"Photo Gallery and Press"}
                                    subheading={"This might be our image gallery quote"}
                                    // subheading={""}
                                    carouselItems={pressUpdates} designTemplate={"imageBackground"}
                                    headingDesign={"splitBanner"}
                                />
                                <GujratBanner/>
                            </ParallaxBackground>

                            <Footer/>
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
