import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import MovieCard from "../Components/MovieCard";
import Footer from "../Components/Footer";
import { MovieContext } from "../Provider/MovieProvider";


const FavMovies = () => {

    const {fMovies,setFMovies}= useContext(MovieContext);

    const loaderData = useLoaderData();

    console.log('loader data',loaderData);
  
    //passing favorite movies to movie context 

    setFMovies(loaderData);
    
    console.log('setting data',fMovies);
    
    

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
                            fMovies.map((fMovie) => {
                                return <MovieCard favFlag={true} key={fMovie._id} movie={fMovie} />
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