import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carusel() {
    const allFlag =[
        {flag: "https://flagcdn.com/wf.svg"},
        {flag: "https://flagcdn.com/is.svg"},
        {flag: "https://flagcdn.com/lu.svg"},
        {flag: "https://flagcdn.com/ml.svg"},
        {flag: "https://flagcdn.com/km.svg"},
        {flag: "https://flagcdn.com/au.svg"},
        {flag: "https://flagcdn.com/ee.svg"},
        {flag: "https://flagcdn.com/ca.svg"},
        {flag: "https://flagcdn.com/by.svg"},
        {flag: "https://flagcdn.com/gy.svg"},
      ]
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            allFlag.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.flag} alt="flag" />
              </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
