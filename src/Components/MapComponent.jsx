// Import required dependencies
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";


// Fix the default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Array of movie theaters
const movieTheaters = [
  { id: 1, name: "AMC Empire 25, New York", position: [40.756, -73.989] },
  { id: 2, name: "The TCL Chinese Theatre, Los Angeles", position: [34.102, -118.341] },
  { id: 3, name: "Odeon Luxe Leicester Square, London", position: [51.510, -0.129] },
  { id: 4, name: "Grand Rex, Paris", position: [48.870, 2.348] },
  { id: 5, name: "PVR ICON Cinemas, Mumbai", position: [19.117, 72.859] },
];

// Original tourism places
const tourismPlaces = [
  { id: 6, name: "Eiffel Tower, Paris", position: [48.8584, 2.2945] },
  { id: 7, name: "Colosseum, Rome", position: [41.8902, 12.4922] },
  { id: 8, name: "Great Wall of China", position: [40.4319, 116.5704] },
  { id: 9, name: "Statue of Liberty, NYC", position: [40.6892, -74.0445] },
  { id: 10, name: "Sydney Opera House", position: [-33.8568, 151.2153] },
];

const MapComponent = () => {


  return (


    <div>
      <h2 className="text-3xl lg:text-4xl text-center font-semibold">
        Locations of  Movie Theaters Nearby
      </h2>
      <p className="text-center text-gray-600">Click on location icons to see their names.</p>
      <div className="map-container mx-auto" style={{ height: "400px", width: "80%", marginTop: "20px" }}>
        <MapContainer  center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          {/* Tile Layer for Map */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Add Markers for Tourism Places */}
          {tourismPlaces.map((place) => (
            <Marker key={place.id} position={place.position}>
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
          {/* Add Markers for Movie Theaters */}
          {movieTheaters.map((theater) => (
            <Marker key={theater.id} position={theater.position}>
              <Popup>{theater.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
