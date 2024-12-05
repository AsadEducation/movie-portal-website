import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import FeaturedMovies from "../Components/FeaturedMovies";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Home = () => {
    return (
        <div className="bg-slate-300">

            <header>
                <div><Navbar></Navbar></div>
                <div className="mt-8 lg:mt-12"><Banner></Banner></div>
            </header>

            <main>
                <FeaturedMovies flag={true}></FeaturedMovies>

                <div className="grid m-4 lg:m-8  place-items-center">
                    <Link
                        
                        to={`/allMovies`}
                    >
                        <button className="px-4 py-2 text-sm font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50">
                            ..see more
                        </button>
                    </Link>
                </div>

            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;