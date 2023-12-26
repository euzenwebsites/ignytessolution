"use client"
import React from 'react';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import Image from 'next/image';
import playbtn from "../../../public/playbtn.png"


const Button = () => {
    useLayoutEffect(() => {
        gsap.to(
          '.button-ani',
          {
            duration:1,
            rotation: 360, // Rotate 360 degrees
            ease: 'none', // Easing function
            repeat:-1,
          }
        );
      }, []);
  return (
    <div className=' rounded-full border-2 border-white border-dashed button-ani p-20 max-sm:hidden'>
                <Image src={playbtn} alt='play button ' height={50} width={50}
                 />
    </div>
  )
}

export default Button
