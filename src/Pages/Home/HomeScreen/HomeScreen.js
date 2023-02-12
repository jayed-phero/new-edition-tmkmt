import React, { useRef, useState } from "react";
import './HomeScreen.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

const HomeScreen = () => {
    return (
        <div>
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
                        <img className="h-full w-full" src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80" />
                        <div class="flex items-center justify-start w-full h-full bg-gray-900/40 absolute top-0 bottom-0">
                            <div class="text-left pl-5">
                                <h1 class="text-3xl font-semibold text-white lg:text-4xl">Build your new <span class="text-blue-400">Saas</span> Project</h1>
                                <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-44 w-32 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="h-full w-full" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                        <div class="flex items-center justify-center w-full h-full bg-gray-900/40 absolute top-0 bottom-0">
                            <div class="text-center">
                                <h1 class="text-3xl font-semibold text-white lg:text-4xl">Build your new <span class="text-blue-400">Saas</span> Project</h1>
                                <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="h-full w-full" src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80" />
                        <div class="flex items-center justify-center w-full h-full bg-gray-900/40 absolute top-0 bottom-0">
                            <div class="text-center">
                                <h1 class="text-3xl font-semibold text-white lg:text-4xl">Build your new <span class="text-blue-400">Saas</span> Project</h1>
                                <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeScreen;