import './App.css'
import Banner from "@/components/banner.tsx";
import ImageGrid from "@/components/image-grid.tsx";
import {ImageCarousel} from "@/components/carousel-row.tsx";
import Footer from "@/components/footer.tsx";
import GujratBanner from "@/components/GujratBanner.tsx";

import { FC, ReactNode } from "react";

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
    <>
      <div className="bg-footer relative">
          <Banner />
          <ParallaxBackground backgroundUrl="https://sahjeevan.org/wp-content/uploads/2023/03/map-marker-1.png">
              <ImageGrid/>
              <GujratBanner />
              <ImageCarousel/>
          </ParallaxBackground>
          <Footer />
      </div>
    </>
  )
}

export default App
