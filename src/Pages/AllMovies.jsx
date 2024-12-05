import FeaturedMovies from "../Components/FeaturedMovies";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const AllMovies = () => {
    return (
        <div>
            <header><Navbar /></header>
            <main>
                <h2 className="text-3xl w-[90%] mx-auto font-semibold  mt-8 lg:mt-12">ALL Movies</h2>
                <FeaturedMovies />
            </main>

            <footer className="mt-8 lg:mt-12">
                <Footer />
            </footer>
        </div>
    );
};

export default AllMovies;