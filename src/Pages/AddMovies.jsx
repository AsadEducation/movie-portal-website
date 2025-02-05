import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MovieForm from '../Components/MovieForm';

const AddMovies = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>

            <div className='my-8 lg:my-12'>
                <MovieForm />
            </div>

            <div> <Footer /></div>
        </div>
    );
};

export default AddMovies;