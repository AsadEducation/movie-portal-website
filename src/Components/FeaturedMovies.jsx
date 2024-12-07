import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { MovieContext } from "../Provider/MovieProvider";


const FeaturedMovies = ({flag}) => {


    const {movies, setMovies} = useContext(MovieContext);

    // console.log(movies);


    let terminal = movies.length;

    if (flag) terminal = 6;



    // console.log(movies)

    return (

        <div>
            {
                flag && <h2 className="text-3xl w-[90%] mx-auto font-semibold  mt-8 lg:mt-12">Featured Movies</h2>
            }
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-[90%] mx-auto mt-8 lg:mt-12">
                {
                    movies.slice(0, terminal).map((movie) => {
                        return <MovieCard key={movie._id} movie={movie} />
                    })
                }

            </div>

        </div>
    );
};

export default FeaturedMovies;