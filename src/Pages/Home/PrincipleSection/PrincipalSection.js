import React from 'react';

const PrincipalSection = () => {
   
    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-0 mt-16'>
            <div className='flex items-start flex-col md:flex-row'>
                <div className='w-full'>
                    <img class="object-cover w-full h-64 principalIntro md:h-96 lg:h-[31rem]  " src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='w-full px-9 md:px-16 pt-16 pb-12 bg-regal-indigo'>
                    <div class="">
                        <p class="text-sm text-regal-green uppercase font-semibold">importance</p>

                        <a href="#" class="block mt-4 text-2xl font-semibold text-white hover:underline dark:text-white md:text-3xl">
                            Education is one thing no one can take away from you.” —Elin Nordegren
                        </a>

                        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-lg">
                            Education is a procedure of learning where knowledge, skills, and habits move from one generation to the other. Moreover, education is essential for the overall development of a human being. For instance, their personal, social as well as the economic development of the country. If we talk about the importance of education in our daily life
                        </p>

                        <a href="#" class="inline-block mt-2 text-regal-green underline hover:text-blue-400">Read more</a>

                        <div class="flex items-center mt-6">
                            <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="" />

                            <div class="mx-2">
                                <h1 class="text-sm text-gray-400 dark:text-gray-200">MW. Zainul Abedin</h1>
                                <p class="text-sm text-regal-green dark:text-gray-400">Sacretary General</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalSection;