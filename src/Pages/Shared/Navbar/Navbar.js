import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/tm-logo.png'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <nav className="relative bg-white shadow dark:bg-gray-800">
                <div className="max-w-7xl px-5 lg:px-0 py-4 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <Link to='/' className='flex items-center'>
                                <img className="lg:h-16 lg:w-16 h-9 w-9 sm:h-12 sm:h-12 rounded-full" src={logo} alt="" />
                                <h3 className='lg:text-4xl sm:text-3xl text-xl font-semibold text-gray-400'><span className='text-regal-indigo'>Tamirul</span> Millat</h3>
                            </Link>

                            {/* <!-- Mobile menu button --> */}
                            <div className="flex lg:hidden">
                                <button onClick={() => setOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    {
                                        isOpen ?
                                            <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            :
                                            <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                            </svg>

                                    }
                                </button>
                            </div>
                        </div>

                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 font-semibold">
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 hover:text-regal-green dark:hover:bg-gray-700">Home</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-regal-green">Academics</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-regal-green">Admission</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-regal-green">Madrasah Life</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-regal-green">Blogs</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-regal-green">Faqs</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-regal-green">Athletics</a>
                            </div>

                            <div className="flex items-center mt-4 lg:mt-0">
                                <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                                    </div>

                                    <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;