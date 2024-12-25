import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngBounds } from "leaflet";
import { Article, articles, Coordinate, CoordinateProjectSummary } from "./project-summary-constants";

Modal.setAppElement("#root"); // For accessibility

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
                <Marker key={index} position={[summary.coordinate.lat, summary.coordinate.lng]}>
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
                className="fixed inset-y-0 right-0 w-1/3 bg-cover bg-center flex flex-col shadow-lg"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                style={{
                  content: {
                    backgroundImage: `url('${selectedArticle.blogBackgroundImg}')`, // Use the dynamic background image
                  },
                }}
            >
              <div className="relative flex-1 p-6 text-white">
                <button
                    className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={closeModal}
                >
                  Close
                </button>
                <button
                    className="absolute top-4 right-32 bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => alert("Supporting the project!")}
                >
                  Support this Project
                </button>
                <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
                <div className="text-md space-y-4">
                  {selectedArticle.blogParts.map((part, index) => (
                      <p key={index}>{part}</p> // Render each blog paragraph
                  ))}
                </div>
              </div>
              <button
                  className="bg-green-500 text-white w-full py-4"
                  onClick={() => alert("Supporting the project!")}
              >
                Support this Project
              </button>
            </Modal>
        )}
      </div>
  );
};

export default ZoomableMapDashboard;
