import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full py-3 bg-regal-indigo hidden lg:block'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                <marquee className='text-white w-full lg:w-1/2' behavior="scrool" direction="">Welcome to Ta'mirul Millat Kamil Madrasah. Your  dream will come true, In Sha Allah. Work hard and be prepare for your right dream.</marquee>
                <div className='flex items-center justify-between gap-5 text-gray-400'>
                    <Link>Alumni</Link>
                    <Link>Schedule</Link>
                    <Link>Portal</Link>
                    <Link
                    className='bg-regal-green py-2 px-5 font-semibold text-white'
                    >Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;