import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";


const Home = () => {
    return (
        <div className="">

            <header>
                  <div><Navbar></Navbar></div>
                  <div className="mt-8 lg:mt-12"><Banner></Banner></div>
            </header>

            <main>
                
            </main>

            <footer>

            </footer>
        </div>
    );
};

export default Home;