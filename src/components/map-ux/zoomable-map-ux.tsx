import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngBounds } from "leaflet";
import { Article, articles, Coordinate, CoordinateProjectSummary } from "./project-summary-constants";


// Define types for the articles and coordinates
const ZoomableMapDashboard: React.FC = () => {
  const [projectSummary, setProjectSummary] = useState<CoordinateProjectSummary[]>([]);
  const [visibleCoordinates, setVisibleCoordinates] = useState<CoordinateProjectSummary[]>(projectSummary);
  const [globalArticles, setGlobalArticles] = useState<Article[]>(articles);
  const [articlesOfInterest, setArticlesOfInterest] = useState<Article[]>(articles);
  useEffect(() => {
    const newSummary: CoordinateProjectSummary[] = [];
    const coordinateMap: Map<string, { coordinate: Coordinate; count: number }> = new Map();
  
    globalArticles.forEach((article: Article) => {
      const key = `${article.location.lat},${article.location.lng}`; // Create a unique key for each coordinate
      if (coordinateMap.has(key)) {
        coordinateMap.get(key)!.count += 1; // Increment the count if the coordinate already exists
      } else {
        coordinateMap.set(key, { coordinate: article.location, count: 1 }); // Initialize the count
      }
    });
  
    // Convert the map to an array of summaries
    coordinateMap.forEach((value) => {
      newSummary.push({
        coordinate: value.coordinate,
        project_count: value.count,
      });
    });
  
    setProjectSummary(newSummary); // Update state with the computed summary
    if (globalArticles.length > 0) {
      setArticlesOfInterest(globalArticles)
    }
  }, [globalArticles]);
  

  useEffect(() => {
    console.log(`Visible coordinates are ${JSON.stringify(visibleCoordinates)}`)
    const visibleLocations = visibleCoordinates.map(summary => summary.coordinate)
    const newArticlesOfInterest = globalArticles.filter(article => visibleLocations.includes(article.location))
    if (newArticlesOfInterest.length > 0) {
      setArticlesOfInterest(newArticlesOfInterest)
    }
  }, [visibleCoordinates])

  const MapEvents = () => {
    const map = useMapEvent("moveend", () => {
      const bounds: LatLngBounds = map.getBounds();
      const visible = projectSummary.filter(
        (summary) =>
          bounds.contains([summary.coordinate.lat, summary.coordinate.lng]) // Check if the coordinate is within the map bounds
      );
      setVisibleCoordinates(visible);
    });

    return null;
  };

  return (
    <div className="flex h-screen">
      {/* Left sidebar */}
      <div className="w-1/3 bg-gray-100 overflow-y-auto p-4">
        <h2 className="text-lg font-bold mb-4">Projects</h2>
        {articlesOfInterest.map((article, index) => (
          <div key={index} className="mb-4 p-4 bg-white shadow rounded">
            <h3 className="text-md font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.description}</p>
            <p className="text-sm text-gray-500">{article.initiative}</p>
          </div>
        ))}
      </div>

      {/* Right map container */}
      <div className="w-2/3">
        <MapContainer
          center={[20.5937, 78.9629]} // Geographic center of India
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
    </div>
  );
};

export default ZoomableMapDashboard;
