import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import One from '../assets/Picture/one.png';
import Two from '../assets/Picture/two.jpg';
import Three from '../assets/Picture/three.png';
import Four from '../assets/Picture/four.jpg';
import MyContainer from '../Components/MyContainer';

const Banner = () => {
    return (
        <MyContainer>
            <div className="">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3300,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="rounded-xl overflow-hidden shadow-lg"
                >
                    <SwiperSlide>
                        <img src={One} alt="Slide 1" className="w-full h-[800px] object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Two} alt="Slide 2" className="w-full h-[800px] object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Three} alt="Slide 3" className="w-full h-[800px] object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Four} alt="Slide 4" className="w-full h-[800px] object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </MyContainer>
    );
};

export default Banner;
