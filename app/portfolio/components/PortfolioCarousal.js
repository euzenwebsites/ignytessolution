"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import Image1 from '../../../public/images/logoport1.jpg';
import Image2 from '../../../public/images/logoport3.jpg';
import Image3 from '../../../public/images/logoport4.jpg';
import Image4 from '../../../public/images/webdesport1.jpg';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function PortfolioCarousal(props) {
  return (
    <>
      <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <Image src={props.image1}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={props.image2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={props.image3} />
        </SwiperSlide> 
      </Swiper>
    </>
  );
}
