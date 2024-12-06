import axios from "axios";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLoaderData, useLocation } from "react-router-dom";

const MovieDetails = () => {


    const { movie_poster, movie_title, genre, duration, release_year, rating, details_button, _id, story } = useLoaderData();



    return (
        <div>

            <header><Navbar /></header>

            <main>


                <div className="min-h-screen  bg-gray-700 text-white flex justify-center items-center">
                    <div className="relative  w-full">
                        {/* Background Poster */}
                        <div className="absolute inset-0">
                            <img
                                src={movie_poster}
                                alt={`${movie_title} Poster`}
                                className="w-full h-full object-cover opacity-40"
                            />
                        </div>

                        {/* Overlay Content */}
                        <div className="relative  z-10 p-8 flex flex-col lg:flex-row items-center gap-8 bg-gradient-to-r from-black to-transparent  lg:min-h-svh ">
                            <div className="lg:mx-auto lg:flex lg:gap-8 lg:items-center ">
                                {/* Movie Poster */}
                                <div className="w-64 flex-shrink-0">
                                    <img
                                        src={movie_poster}
                                        alt={`${movie_title} Poster`}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>

                                {/* Movie Details */}
                                <div className="flex flex-col  space-y-4">
                                    <span className="text-gray-400 uppercase text-sm">Featured Movies</span>
                                    <h1 className="text-5xl font-bold">{movie_title}</h1>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <span>{duration}</span>
                                        <span>|</span>
                                        <span>{genre}</span>
                                        <span>|</span>
                                        <span>{release_year}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-yellow-400">
                                        {Array.from({ length: Math.round(rating) }, (_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 max-w-2xl">{story}</p>

                                    <div className="flex gap-4">
                                        <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                                            Watch Now
                                        </button>
                                        <button className="px-6 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition">
                                            More Info →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <footer>
                <Footer />
            </footer>


        </div>
    );
};

export default MovieDetails;