

import gang from '../assets/gangstar.png'
import panther from '../assets/panther.jpg'
import tomb from '../assets/tomb (1).jpg'


const Banner = () => {
    return (
       <div className="w-[90%] h-[500px] mx-auto">
         <div className="carousel w-full h-full ">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={gang}
                    className="w-full h-full object-cover rounded-2xl " />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={panther}
                    className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={tomb}
                    className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
       </div>
    );
};

export default Banner;