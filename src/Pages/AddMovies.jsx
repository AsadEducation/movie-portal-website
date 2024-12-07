import { useState } from "react";

const AddMovie = () => {
    const [formData, setFormData] = useState({
        poster: "",
        title: "",
        genre: "",
        duration: "",
        releaseYear: "",
    });

    const [error, setError] = useState("");

    const genres = ["Comedy", "Drama", "Horror", "Action"];
    const years = [2024, 2023, 2022, 2021];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.poster.startsWith("http")) {
            setError("Poster must be a valid link.");
            return;
        }
        if (formData.title.length < 2) {
            setError("Title must be at least 2 characters.");
            return;
        }
        if (!formData.genre) {
            setError("Please select a genre.");
            return;
        }
        if (!formData.duration || formData.duration <= 60) {
            setError("Duration must be greater than 60 minutes.");
            return;
        }
        if (!formData.releaseYear) {
            setError("Please select a release year.");
            return;
        }

        setError(""); // Clear error if validation passes
        console.log("Form submitted:", formData);
        alert("Movie added successfully!");

        // Reset form
        setFormData({
            poster: "",
            title: "",
            genre: "",
            duration: "",
            releaseYear: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-bold mb-4">Add Movie</h2>

            {error && <p className="text-red-500">{error}</p>}

            <div className="mb-4">
                <label className="block font-medium mb-1">Poster Link:</label>
                <input
                    type="text"
                    name="poster"
                    value={formData.poster}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., https://example.com/poster.jpg"
                />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-1">Movie Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Inception"
                />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-1">Genre:</label>
                <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                >
                    <option value="">Select Genre</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-1">Duration (minutes):</label>
                <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., 120"
                />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-1">Release Year:</label>
                <select
                    name="releaseYear"
                    value={formData.releaseYear}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Add Movie
            </button>
        </form>
    );
};

export default AddMovie;
