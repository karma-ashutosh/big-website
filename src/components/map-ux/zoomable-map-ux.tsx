import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngBounds } from "leaflet";
import { Article, articles, Coordinate, CoordinateProjectSummary } from "./project-summary-constants";
import DonationButton from "@/components/DonateButton.tsx";

Modal.setAppElement("#root"); // For accessibility
const googleMapsIcon = L.icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png", // URL of the Google Maps marker icon
  iconSize: [30, 40], // Adjust the size to match the appearance
  iconAnchor: [15, 40], // Anchor the icon to its base
  popupAnchor: [0, -40], // Position the popup relative to the marker
});

const ZoomableMapDashboard: React.FC = () => {
  const [projectSummary, setProjectSummary] = useState<CoordinateProjectSummary[]>([]);
  const [visibleCoordinates, setVisibleCoordinates] = useState<CoordinateProjectSummary[]>(projectSummary);
  const [globalArticles] = useState<Article[]>(articles);
  const [articlesOfInterest, setArticlesOfInterest] = useState<Article[]>(articles);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const newSummary: CoordinateProjectSummary[] = [];
    const coordinateMap: Map<string, { coordinate: Coordinate; count: number }> = new Map();

    globalArticles.forEach((article: Article) => {
      const key = `${article.location.lat},${article.location.lng}`;
      if (coordinateMap.has(key)) {
        coordinateMap.get(key)!.count += 1;
      } else {
        coordinateMap.set(key, { coordinate: article.location, count: 1 });
      }
    });

    coordinateMap.forEach((value) => {
      newSummary.push({
        coordinate: value.coordinate,
        project_count: value.count,
      });
    });

    setProjectSummary(newSummary);
    if (globalArticles.length > 0) {
      setArticlesOfInterest(globalArticles);
    }
  }, [globalArticles]);

  useEffect(() => {
    const visibleLocations = visibleCoordinates.map((summary) => summary.coordinate);
    const newArticlesOfInterest = globalArticles.filter((article) =>
        visibleLocations.includes(article.location)
    );
    if (newArticlesOfInterest.length > 0) {
      setArticlesOfInterest(newArticlesOfInterest);
    }
  }, [visibleCoordinates]);

  const MapEvents = () => {
    const map = useMapEvent("moveend", () => {
      const bounds: LatLngBounds = map.getBounds();
      const visible = projectSummary.filter((summary) =>
          bounds.contains([summary.coordinate.lat, summary.coordinate.lng])
      );
      setVisibleCoordinates(visible);
    });
    return null;
  };

  const openModal = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
      <div className="flex h-screen">
        {/* Left sidebar */}
        <div className="w-1/3 bg-gray-100 overflow-y-auto p-4">
          <h2 className="text-lg font-bold mb-4">Projects</h2>
          {articlesOfInterest.map((article, index) => (
              <div
                  key={index}
                  className="mb-4 p-4 bg-white shadow rounded cursor-pointer"
                  onClick={() => openModal(article)}
              >
                <h3 className="text-md font-semibold">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
                <p className="text-sm text-gray-500">{article.initiative}</p>
              </div>
          ))}
        </div>

        {/* Right map container */}
        <div className="w-2/3">
          <MapContainer
              center={[20.5937, 78.9629]}
              zoom={5}
              scrollWheelZoom={true}
              className="h-full w-full"
          >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {projectSummary.map((summary, index) => (
                <Marker icon={googleMapsIcon} key={index} position={[summary.coordinate.lat, summary.coordinate.lng]}>
                  <Popup>{`Projects In ${summary.coordinate.name.toUpperCase()}: ${summary.project_count}`}</Popup>
                </Marker>
            ))}
            <MapEvents />
          </MapContainer>
        </div>

        {/* Modal */}
        {selectedArticle && (
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="absolute top-0 right-0 h-full w-2/3 flex flex-col shadow-lg"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
              {/* Modal Content */}
              <div
                  className="flex flex-col h-full bg-cover bg-center text-white"
                  style={{
                    backgroundImage: `url('${selectedArticle.blogBackgroundImg}')`, // Dynamic background image
                  }}
              >
                {/* Overlay for readability */}
                <div className="bg-black bg-opacity-50 backdrop-blur-sm h-full p-6 overflow-y-auto">
                  {/* Header Buttons */}
                  <div className="flex justify-between items-center mb-4">
                    <DonationButton donationButtonText="Support this cause"/>
                  </div>

                  {/* Article Title */}
                  <h2 className="text-3xl font-bold mb-4">{selectedArticle.title}</h2>

                  {/* Optional YouTube Video Component */}
                  {selectedArticle.videoUrl && (
                      <div className="mb-6">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/VupuiZaCPCw?si=JuDNb3Cx_fwDvUXn"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                      </div>
                  )}

                  {/* Article Text */}
                  <div className="text-lg leading-relaxed space-y-4">
                    {selectedArticle.blogParts.map((part, index) => (
                        <p key={index}>{part}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Button */}
              <div
                  className="bg-green-500 text-white w-full py-4 text-center"
              >
                <DonationButton />
              </div>
            </Modal>
        )}






      </div>
  );
};

export default ZoomableMapDashboard;
