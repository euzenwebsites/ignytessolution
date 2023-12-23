"use client"
import React from 'react';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RevealWrapper } from  'next-reveal'


const AboutAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.scrollable-div', 
            start: 'top bottom  ',
            end: 'bottom center',
            scrub: true, 
          },
        });
    
        tl.to('.scrollable-div', {
            x:-800,
            ease:"ease",
            opacity:0,
        });
        tl.to('.scrollable-div', {
            x:0,
            ease:"ease",
            // opacity:1,
        });
      }, []);
    return (
        <RevealWrapper origin='left' delay={200} duration={2000} reset={true}>
        <div className='text-[#fff] w-[100%] mb-4 sm:mb-0 sm:w-[50%]  '>
            <h3 className='capitalize text-4xl sm:text-5xl font-bold mb-4 sm:mb-10 text-change'>ABOUT US</h3>
            <p className='text-xl sm:text-2xl font-normal'>We are proactive problem solvers focused on making dreams come true.</p>
        </div>
        </RevealWrapper >
    );
};

export default AboutAnimation;
