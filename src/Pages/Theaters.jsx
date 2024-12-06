import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { Suspense } from "react";
//This can cause error:
const MapComponent = React.lazy(() => import('../Components/MapComponent'));


const Theaters = () => {



    return (
        <div>
            <div><Navbar /></div>
            <Suspense fallback={<div>Loading map...</div>}>
                <div className="bg-gray-400 px-4 py-24"><MapComponent /></div>
            </Suspense>

            <div><Footer /></div>
        </div>
    );
};

export default Theaters;
