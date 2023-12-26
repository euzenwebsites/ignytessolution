"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/all';
import SplitText from 'split-text';
import VectorRight from './VectorRight';

const Description = (props) => {
  const textRef = useRef(null);
  return (
    <section className='bg-[#000] h-full w-[100%] flex justify-center text-[#fff] pt-10 pb-10 sm:pt-36 sm:pb-28'>
      <VectorRight/>
      <div className='w-[80%] flex flex-col smooth-wapper' >
        <div className='font-bold  w-[100%] sm:w-[50%] h-full ' ref={textRef} id='smooth-content'>
          <p className='font-extrabold text-base uppercase mb-10 pl-28 '>{props.heading}</p>
          <h3 className='text-3xl font-medium leading-10' >
            {props.description}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Description;



