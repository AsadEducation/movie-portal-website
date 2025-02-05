import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { CgTrash } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext, useState } from "react";
import { MovieContext } from "../Provider/MovieProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MovieDetails = () => {


    const { movies, setMovies } = useContext(MovieContext);
    const {user}= useContext(AuthContext);

    const email = user.email;

    // console.log(user);

    const movieInfo = useLoaderData();

    const { movie_poster, movie_title, genre, duration, release_year, rating, details_button, _id, story } = movieInfo;

    const newMovieInfo = {...movieInfo,email};


    const navigate = useNavigate();




    const handleDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://last-movie-portal.onrender.com/movies/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remained = movies.filter((movie) => movie._id != _id);

                            setMovies(remained);

                            navigate('/allMovies');

                        }

                    })
            }
        });

    }

    const handleFavorite = () => {

        fetch('https://last-movie-portal.onrender.com/favMovies/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newMovieInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Added To Favorite Collection",
                        text: "please visit favorite movies",
                        icon: "success"
                    });
                }
            })

    }



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
                                        <button onClick={handleDelete} className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                                            <CgTrash className="text-2xl" />
                                        </button>

                                        {
                                            <button onClick={handleFavorite} className="px-6 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition">
                                                <MdFavoriteBorder className="text-2xl" />
                                            </button>
                                        }
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