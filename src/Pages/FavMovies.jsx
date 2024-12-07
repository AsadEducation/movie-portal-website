import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import Footer from "../Components/Footer";


const FavMovies = () => {

    const loaderData = useLoaderData();

    const [favoriteMovies, setFavoriteMovies] = useState(loaderData);

    return (
        <div>

            <header>
                <Navbar />
            </header>

            <main>

                <div className="my-12">
                    <h2 className="text-3xl w-[90%] mx-auto font-bold">Favorite Movies:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-[90%] mx-auto mt-8 lg:mt-12">
                        {
                            favoriteMovies.map((favoriteMovie) => {
                                return <MovieCard key={favoriteMovie._id} movie={favoriteMovie} />
                            })
                        }

                    </div>

                </div>
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
};

export default FavMovies;