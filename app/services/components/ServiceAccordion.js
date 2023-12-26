"use client"
import React, { useEffect, useRef } from 'react';
import { gsap, ScrollSmoother, ScrollTrigger } from 'gsap/all';

// import SplitType from 'split-type'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import VectorRight from '@/app/components/ui/VectorRight';

const ServiceAccordion = () => {
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 2,   // seconds it takes to "catch up" to native scroll position
//   effects: true 
// });
// scroller.effects(".box", {lag: 0.5, speed: 1});
  return (
    <section className='box bg-[#000] h-full w-[100%] flex justify-center text-[#fff] pt-36 pb-28 z-500' id="smooth-wrapper">
        <div className='w-[80%] flex flex-col' id="smooth-content">
            <div className='ani-text font-bold text-4xl sm:text-5xl mb-10 w-full h-full ' >
                <p className='font-extrabold text-base uppercase mb-10 text-center '>THE OFFERS</p>
                <h3 id='target'>
                Look through our wide range of specialized services that correspond to your particular
                  <span className='second-heading'> business requirements.</span>
                </h3>
            </div>
<div className='mt-28 text-sm sm:text-2xl text-[#DEE1E6]'>
            <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'  className='font-bold pb-8 text-2xl sm:text-4xl text-[#DEE1E6] uppercase '>
          Web <span className='second-heading'>design</span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={40} pt={40} >
    Our web design service combines creativity and imagination to produce visually stunning
     and accessible websites. We create immersive digital experiences that successfully draw in your 
    audience and strengthen your online visibility by blending functionality and design
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' pb="35px" className='font-bold text-2xl sm:text-4xl text-[#DEE1E6] uppercase'>
        Mobile App <span className='second-heading'>Development</span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={40} pt={40}>
    With a focus on developing mobile applications, we combine originality with practicality 
    to make applications that are focused on the user. We provide smooth digital solutions with our knowledge
     to make sure your app is unique and efficiently engages users.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' pb="35px" className='font-bold text-2xl sm:text-4xl text-[#DEE1E6] uppercase'>
          S e <span className='second-heading'>o</span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={40} pt={40}>
    We increase your online presence by improving visibility and organic 
    reach through intelligent SEO tactics. Our specialized techniques promote long-term success in competitive digital environments by improving your 
    website&apos;s ranks and promoting sustainable growth.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' pb="35px" className='font-bold text-2xl sm:text-4xl text-[#DEE1E6] uppercase'>
        
        Social Media<span className='second-heading'> Marketing</span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={40} pt={40}>
    By utilizing strategic social media marketing, we strengthen your brand and create 
    memorable campaigns. Our focused strategy makes use of platforms to increase your online visibility by 
    generating significant interactions and long-lasting relationships.
    </AccordionPanel>
  </AccordionItem>

  
  
</Accordion>
            </div>
        </div>

    </section>
  )
}

export default ServiceAccordion
