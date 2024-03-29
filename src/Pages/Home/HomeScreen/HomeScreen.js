import React, { useRef, useState } from "react";
import './HomeScreen.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import PrincipalSection from "../PrincipleSection/PrincipalSection";
import { Link } from "react-router-dom";

const HomeScreen = () => {

    const infodata = [
        {
            icon: <i class="fa-solid fa-building-columns"></i>,
            title: 'Madrasah Life',
            desc: 'Overall in here',
        },
        {
            icon: <i class="fa-solid fa-user-graduate"></i>,
            title: 'Mauwlana',
            desc: 'Getting Diploma',
        },
        {
            icon: <i class="fa-brands fa-battle-net"></i>,
            title: 'Takshu',
            desc: 'Institution Club',
        },
        {
            icon: <i class="fa-brands fa-playstation"></i>,
            title: 'Social',
            desc: 'Overall in here',
        },
    ]
    return (
        <div>
            <div className="">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    effect={"fade"}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay,
                        EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <img className="w-full min-h-screen" src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80" />
                            <div class="w-full h-full flex items-center justify-start bg-gray-900/40 absolute top-0 bottom-0">
                                <div class="text-left md:pl-32 pl-5">
                                    <h3 className="text-white md:text-3xl text-xl font-medium mb-5">The Best Madrasah Of The State</h3>
                                    <h1 class="text-2xl font-bold text-white md:text-4xl lg:text-6xl bg-regal-indigo p-3 md:p-5 ">Ta'mirul Millat Kamil Madrasah</h1>
                                    <Link to='/comming'> <button class=" py-3 mt-4 text-md md:text-lg font-medium text-gray-700 hover:text-regal-indigo capitalize transition-colors duration-300 transform bg-white lg:w-44 w-32 border-l-4 border-regal-green">Tak A Tour</button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img className=" w-full min-h-screen" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                            <div class="w-full h-full flex items-center justify-start bg-gray-900/40 absolute top-0 bottom-0">
                                <div class="text-left md:pl-32 pl-5">
                                    <h3 className="text-white md:text-3xl text-xl font-medium mb-5">The Best Madrasah Of The State</h3>
                                    <h1 class="text-2xl font-bold text-white md:text-4xl lg:text-6xl bg-regal-indigo p-3 md:p-5 ">Ta'mirul Millat Kamil Madrasah</h1>
                                    <Link to='/comming'> <button class=" py-3 mt-4 text-md md:text-lg font-medium text-gray-700 hover:text-regal-indigo capitalize transition-colors duration-300 transform bg-white lg:w-44 w-32 border-l-4 border-regal-green">Tak A Tour</button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img className="w-full min-h-screen" src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80" />
                            <div class="w-full h-full flex items-center justify-start bg-gray-900/40 absolute top-0 bottom-0">
                                <div class="text-left md:pl-32 pl-5">
                                    <h3 className="text-white md:text-3xl text-xl font-medium mb-5">The Best Madrasah Of The State</h3>
                                    <h1 class="text-2xl font-bold text-white md:text-4xl lg:text-6xl bg-regal-indigo p-3 md:p-5 ">Ta'mirul Millat Kamil Madrasah</h1>
                                    <Link to='/comming'> <button class=" py-3 mt-4 text-md md:text-lg font-medium text-gray-700 hover:text-regal-indigo capitalize transition-colors duration-300 transform bg-white lg:w-44 w-32 border-l-4 border-regal-green">Tak A Tour</button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="relative">
                <div className='max-w-7xl mx-auto bg-white shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 md:px-16 py-7 md:py-11 gap-11 md:gap-0 md:absolute -top-16 left-0 right-0 z-50'>
                    {
                        infodata.map(data =>
                            <div className='flex items-start gap-5'>
                                <h3 className='text-5xl'>{data.icon}</h3>
                                <div>
                                    <h3 className='text-regal-indigo text-xl font-semibold'>{data.title}</h3>
                                    <p className='text-gray-900 text-xl '>{data.desc}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;