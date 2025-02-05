import { useContext } from "react";
import { CgTrash } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { MovieContext } from "../Provider/MovieProvider";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const MovieCard = ({ movie, favFlag }) => {

    const { movie_poster, movie_title, genre, duration, release_year, rating, details_button, _id } = movie;

    const { fMovies,setFMovies } = useContext(MovieContext);
    const { user, setUser } = useContext(AuthContext);



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

                fetch(`https://last-movie-portal.onrender.com/favMovies/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);

                        if (data.deletedCount) {

                            const remained = fMovies.filter((fMovie)=>fMovie._id!==_id);

                            setFMovies(remained);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                           
                            
                        }
                    })


            }
        });
    }


    return (
        <div className="relative max-w-[450px] rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:text-gray-200">
            {/* Movie Poster with Video Icon */}
            <div className="relative">
                <img className="w-full h-64 object-cover" src={movie_poster} alt={movie_title} />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 text-white"
                    >
                        <path d="M9.75 7.6v8.8l6.75-4.4-6.75-4.4Z" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5c5.247 0 9.5-4.253 9.5-9.5S17.247 2.5 12 2.5 2.5 6.753 2.5 12 6.753 21.5 12 21.5Zm0-1.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                        />
                    </svg>
                </div>
            </div>
            {/* Movie Details */}
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{movie_title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{genre} | {duration}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Release Year: {release_year}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rating: {rating}</p>

                {
                    favFlag ? (<button onClick={handleDelete}> <CgTrash className="text-3xl text-red-500" /></button>)
                        : (<Link to={`/movieDetails/${_id}`}><button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50">
                            {details_button || 'Details'}
                        </button>
                        </Link>)
                }


            </div>
        </div>
    );
};

export default MovieCard;
