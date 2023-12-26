"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const PortfolioContainer = (props) => {
  return (
<section className='mt-32 mb-32 relative block w-[100%] '>
  <div className={`flex flex-row items-end justify-${props.direction} max-sm:justify-center`}>
    <div className='sm-mx:p-10'>
      <div className={`h-[80%] w-[100%]  object-cover object-center sm:rounded-${props.border}-[30px]`} >
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
        className={`mySwiper  object-cover object-center sm:rounded-${props.border}-[30px]`}>
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
      </div>
          <h3 className='text-3xl font-semibold mt-2 uppercase'>{props.title}</h3>
    </div>
  </div>
</section>
  )
}

export default PortfolioContainer



