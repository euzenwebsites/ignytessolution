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
import Image5 from '../../../public/images/webdesport2.jpg';
import Image6 from '../../../public/images/webdesport3.jpg';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
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
          <Image src={Image1}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image5} width={800} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image6} />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
