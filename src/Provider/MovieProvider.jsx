import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext(); // Keep the context name as is.

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const [fMovies, setFMovies] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => {
                // console.error("Failed to fetch movies:", err)
            });
    }, []);





    const info = {
        movies,
        setMovies,
        fMovies,
        setFMovies,
    };


    return (
        <MovieContext.Provider value={info}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;
