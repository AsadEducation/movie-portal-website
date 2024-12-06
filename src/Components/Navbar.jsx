import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Movie-logo.webp';
import { AuthContext } from '../Provider/AuthProvider';
import { FaPersonFalling } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // dark:text-violet-600 dark:border-violet-600

    const { user, logoutUser } = useContext(AuthContext);

    // console.log(user);


    const links = <>
        <li className="flex">
            <NavLink
                to="/home"
                className={({ isActive }) =>
                    `flex items-center px-4 -mb-1 border-b-2 ${isActive ? 'text-violet-600 border-violet-600' : 'border-transparent'
                    }`
                }
            >
                Home
            </NavLink>
        </li>
        <li className="flex">
            <NavLink
                to="/addMovies"
                className={({ isActive }) =>
                    `flex items-center px-4 -mb-1 border-b-2 ${isActive ? 'text-violet-600 border-violet-600' : 'border-transparent'
                    }`
                }
            >
                Add Movie
            </NavLink>
        </li>
        <li className="flex">
            <NavLink
                to="/favorites"
                className={({ isActive }) =>
                    `flex items-center px-4 -mb-1 border-b-2 ${isActive ? 'text-violet-600 border-violet-600' : 'border-transparent'
                    }`
                }
            >
                Favorites
            </NavLink>
        </li>
        <li className="flex">
            <NavLink
                to="/allMovies"
                className={({ isActive }) =>
                    `flex items-center px-4 -mb-1 border-b-2 ${isActive ? 'text-violet-600 border-violet-600' : 'border-transparent'
                    }`
                }
            >
                All Movies
            </NavLink>
        </li>
        <li className="flex">
            <NavLink
                to="/theaters"
                className={({ isActive }) =>
                    `flex items-center px-4 -mb-1 border-b-2 ${isActive ? 'text-violet-600 border-violet-600' : 'border-transparent'
                    }`
                }
            >
                Theaters Nearby
            </NavLink>
        </li>
    </>

    const showProfile = <>

        {
            user?.photoURL ? (<div className='lg:flex flex-row-reverse  group  items-center gap-2'>
                <img className="w-10 h-10 mx-auto lg:mx-0 rounded-full " src={user?.photoURL} alt="IMG" />
                <p className='font-semibold  opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{user?.displayName}</p>

            </div>)
                :
                (
                    <CgProfile className='text-3xl mr-4 dark:text-violet-600' />
                )

        }

        {user ? (

            <button onClick={() => logoutUser()} className="self-center px-8 py-2 ml-4 rounded dark:bg-violet-600 dark:text-gray-50">
                Logout
            </button>

        ) : (
            <Link to={`/auth/login`}>
                <button className="self-center px-8 py-2 rounded dark:bg-violet-600 dark:text-gray-50">
                    Login
                </button>
            </Link>
        )}
    </>


    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };


    return (

        // dark:bg-gray-100 dark:text-gray-800

        <header className="p-4  bg-slate-300">
            <div className="container items-center w-[90%] mx-auto flex justify-between h-16 ">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img className="w-10 h-10 rounded-lg" src={logo} alt="Logo" />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    {links}
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {/* showing login and register button based on user  */}

                    {showProfile}

                </div>
                <button
                    onClick={toggleDropdown}
                    className="p-4 lg:hidden"
                    aria-label="Toggle navigation"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="lg:hidden mt-2 bg-white rounded-md shadow-md dark:bg-gray-200">
                    <ul className="flex flex-col space-y-2">
                        {links}
                        {showProfile}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
