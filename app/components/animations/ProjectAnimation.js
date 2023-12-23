"use client"
import React from 'react';

import { RevealWrapper } from  'next-reveal'


const ProjectAnimation = () => {
    return (
        <RevealWrapper origin='right' delay={200} duration={2000} reset={true}>
        <div className='w-[100%]'>
        <h3 className='capitalize text-4xl sm:text-5xl font-bold mb-4 sm:mb-10 text-change'>OUR PORTFOLIO</h3>
        <p className='text-xl sm:text-2xl font-normal'>View our extensive portfolio, which features inventive ideas for a range of businesses and industries.</p>
        </div>
        </RevealWrapper >
    );
};

export default ProjectAnimation;
