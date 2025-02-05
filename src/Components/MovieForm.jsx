import React, { useState } from 'react'

import Rating from "react-rating-stars-component";

const MovieForm = () => {

    const [rating, setRating] = useState(0)

    const handleForm = (e) => {

        e.preventDefault();


    }

    const handleRating = (rate) => {
        setRating(rate);
        console.log(rate);
    }


    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add a Movie</h2>
            <form onSubmit={handleForm}>
                {/* Movie Poster */}
                <div className="mb-4">
                    <label htmlFor="poster" className="block text-gray-700 font-medium mb-2">
                        Movie Poster (Image Link)
                    </label>
                    <input
                        type="url"
                        id="poster"
                        name="poster"
                        placeholder="https://example.com/poster.jpg"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Movie Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                        Movie Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter movie title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Genre */}
                <div className="mb-4">
                    <label htmlFor="genre" className="block text-gray-700 font-medium mb-2">
                        Genre
                    </label>
                    <select
                        id="genre"
                        name="genre"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Genre</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                {/* Duration */}
                <div className="mb-4">
                    <label htmlFor="duration" className="block text-gray-700 font-medium mb-2">
                        Duration (minutes)
                    </label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        placeholder="Enter duration in minutes"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Release Year */}
                <div className="mb-4">
                    <label htmlFor="releaseYear" className="block text-gray-700 font-medium mb-2">
                        Release Year
                    </label>
                    <select
                        id="releaseYear"
                        name="releaseYear"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        {/* Add more years as needed */}
                    </select>
                </div>

                {/* Rating */}

                <div className='my-8'>
                    <p className='text-xl font-bold text-gray-600'>Rating</p>
                    <Rating
                        onClick={handleRating}
                        style={{ fontSize: "40px" }} // Adjust the font size
                    /* Available Props */
                    />
                </div>




                {/* Summary */}
                <div className="mb-4">
                    <label htmlFor="summary" className="block text-gray-700 font-medium mb-2">
                        Summary
                    </label>
                    <textarea
                        id="summary"
                        name="summary"
                        placeholder="Write a short summary..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Add Movie
                </button>
            </form>
        </div>
    );
};

export default MovieForm;
