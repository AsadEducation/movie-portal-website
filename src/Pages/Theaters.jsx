import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MapComponent from "../Components/MapComponent";


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

// Array of tourism places
const tourismPlaces = [
    { id: 6, name: "Eiffel Tower, Paris", position: [48.8584, 2.2945] },
    { id: 7, name: "Colosseum, Rome", position: [41.8902, 12.4922] },
    { id: 8, name: "Great Wall of China", position: [40.4319, 116.5704] },
    { id: 9, name: "Statue of Liberty, NYC", position: [40.6892, -74.0445] },
    { id: 10, name: "Sydney Opera House", position: [-33.8568, 151.2153] },
];

const Theaters = () => {

    
   
    return (
        <div>
            <div><Navbar /></div>
            <div className="bg-gray-400 px-4 py-24"><MapComponent /></div>
            <div><Footer /></div>
        </div>
    );
};

export default Theaters;
