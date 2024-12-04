import './App.css'
import Banner from "@/components/banner.tsx";
import ImageGrid from "@/components/image-grid.tsx";
import {ImageCarousel} from "@/components/carousel-row.tsx";
import Footer from "@/components/footer.tsx";

function App() {
  return (
    <>
      <div className="bg-footer">
          <Banner />
          <ImageGrid/>
          <ImageCarousel/>
          <Footer />
      </div>
    </>
  )
}

export default App
