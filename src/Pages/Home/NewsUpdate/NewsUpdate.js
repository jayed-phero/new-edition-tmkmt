import React from 'react';
import './NewsUpdate.css';

const NewsUpdate = () => {
    return (
        <div className='flex items-start flex-col lg:flex-row max-w-7xl mx-auto'>
            <div className='py-16 flex-1'>
                <div className='flex items-center gap-7 pb-2'>
                    <h3 className='text-2xl md:text-3xl font-bold text-regal-indigo '>News & Updates</h3>
                    {/* <div className='border-2 border-gray-500 w-full'></div> */}
                </div>
                <p className='text-regal-green mb-5'>Read All News</p>
                <div className='flex items-start flex-col md:flex-row gap-9'>
                    <div className='w-[450px]'>
                        <img src='https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
                            className='w-full  h-56'
                        />
                        <div className='mt-7'>
                            <div className='flex items-center gap-3 text-gray-400 pb-3'>
                                <h3>JUNE 7 2022 /</h3>
                                <h3>ADMISSION STUDENT </h3>
                            </div>
                            <h3 className='font-bold text-2xl hover:text-regal-green text-gray-700'>Professor Albert joint research on mobile money in Tanzania</h3>
                            <button className='bg-regal-green w-44 py-3 hover:bg-green-600  mt-5 flex items-center justify-center font-bold text-white '>
                                See Details
                            </button>
                        </div>
                    </div>
                    <div>
                        {
                            [1, 2, 3, 4].map(i =>
                                <div className='flex items-center gap-5 mb-5'>
                                    <img src='https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60'
                                        className='imageST rounded '
                                    />
                                    <div className=''>
                                        <div className='flex items-center gap-3 text-gray-400 pb-3'>
                                            <h3>JUNE 7 2022 /</h3>
                                            <h3>ADMISSION STUDENT </h3>
                                        </div>
                                        <h3 className='font-semibold text-lg hover:text-regal-green text-gray-700'>Professor Albert joint research on mobile money in Tanzania</h3>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='lg:w-[400px] w-full bg-regal-indigo px-9 py-16'>
                <h3 className='text-2xl md:text-3xl font-bold text-white pb-5'>Quick Links</h3>
                {
                    [1, 2, 3, 4, 5, 6, 7].map(i =>
                        <h3 className='text-xl font-semibold pb-5 border-b-2 border-gray-400 my-5 text-regal-green'>research mobile money</h3>
                    )
                }
            </div>
        </div>
    );
};

export default NewsUpdate;