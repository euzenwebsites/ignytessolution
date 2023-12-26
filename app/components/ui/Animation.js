"use client"

import React from 'react';
import { gsap } from 'gsap';
import { useLayoutEffect, useEffect ,useState} from 'react';
import { PixiPlugin } from 'gsap/PixiPlugin';
import * as PIXI from 'pixi.js'; // Import PIXI


const Animation = () => {
  const [pageHeight, setPageHeight] = useState(0);
  gsap.registerPlugin(PixiPlugin);
  PixiPlugin.registerPIXI(PIXI);

  useEffect(() => {
    const height = document.body.scrollHeight;
    setPageHeight(height);
    console.log(height)
  }, []);
  

  useLayoutEffect(() => {
    gsap.fromTo(".box1", { y: 0, duration: 30,delay: 1,ease:"ease", repeat: -1 }, 
        { y: pageHeight, duration: 30,ease: "ease",repeat: -1, }
        );
      });
  useLayoutEffect(() => {
      gsap.fromTo(".box2", { y: pageHeight, duration: 30,delay: 3,ease:"ease", repeat: -1 }, 
        { y: 0, duration: 10,ease: "ease",repeat: -1, }
        );
    });
  useLayoutEffect(() => {
        
        gsap.fromTo(".box3", { y: 0, duration: 50,delay: 7,ease:"ease", repeat: -1 }, 
        { y: pageHeight, duration: 15,ease: "ease",repeat: -1, }
        );
      });

  
  return (
    <section className='h-full'>
      <div className='w-[80%] grid grid-cols-3'>
        <div className={`w-10 z-100  flex justify-center items-center absolute left-[20%] sm:left-[20%]  top-0 overflow:hidden `} style={{height:`${pageHeight}px`}}>
        <div className={`w-[0.5px] opacity-20  z-100  bg-[#E3E3E3]  top-0 overflow:hidden z-900`} style={{height:`${pageHeight}px`}}></div>
        <div className='box1 absolute top-0 z-500'>
            <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange  opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-b from-orange to-red"></span>
            </span>
          </div>
        </div>

        <div className={`w-10 z-100  flex justify-center items-center absolute left-[45%] sm:left-[49%]  top-0 overflow:hidden `} style={{height:`${pageHeight}px`}}>
        <div className={`w-[0.5px] opacity-20  z-100  bg-[#E3E3E3]  top-0 overflow:hidden z-900`} style={{height:`${pageHeight}px`}}></div>
        <div className='box2 absolute top-0 z-500'>
            <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange  opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-b from-orange to-red"></span>
            </span>
          </div>
        </div>

        <div className={`w-10 z-100  flex justify-center items-center absolute left-[70%] sm:left-[77%]  top-0 overflow:hidden `} style={{height:`${pageHeight}px`}}>
        <div className={`w-[0.5px] opacity-20  z-100  bg-[#E3E3E3]  top-0 overflow:hidden z-900`} style={{height:`${pageHeight}px`}}></div>
        <div className='box3 absolute top-0 z-500'>
            <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange  opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-b from-orange to-red"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animation;


// import React from 'react'
// import { gsap } from "gsap";
// import { useLayoutEffect } from 'react';
// import { PixiPlugin } from "gsap/PixiPlugin";


// const Animation = () => {
//     gsap.registerPlugin(PixiPlugin);
//     PixiPlugin.registerPIXI(PIXI);
//     useLayoutEffect(() => {
        
//         gsap.fromTo(".box1", { y: 0, duration: 30,delay: 1,ease:"ease", repeat: -1 }, 
//         { y: 4000, duration: 30,ease: "ease",repeat: -1, }
//         );
//       });
//       useLayoutEffect(() => {
//       gsap.fromTo(".box2", { y: 4000, duration: 30,delay: 3,ease:"ease", repeat: -1 }, 
//         { y: 0, duration: 10,ease: "ease",repeat: -1, }
//         );
//     });
//     useLayoutEffect(() => {
        
//         gsap.fromTo(".box3", { y: 0, duration: 50,delay: 7,ease:"ease", repeat: -1 }, 
//         { y: 4000, duration: 15,ease: "ease",repeat: -1, }
//         );
//       });
      
//   return (
//     <section className='h-full'>
//         <div>
//             <div className='w-[0.5px] opacity-25 h-[4000px] bg-[#E3E3E3] absolute left-[25.5%] top-0 overflow:hidden z-800'></div>
//             <div className='w-[0.5px] opacity-25 h-[4000px] bg-[#E3E3E3] absolute left-[50.5%] top-0 overflow:hidden z-800'></div>
//             <div className='w-[0.5px] opacity-25 h-[4000px] bg-[#E3E3E3] absolute left-[75.5%] top-0 overflow:hidden z-800'></div>
//             <div className='box1 w-4 h-4 bg-[#F54C0F] absolute left-[25%] rounded-full z-1000' ></div>
//             <div className='box2 w-4 h-4 bg-[#F54C0F] absolute left-[50%] rounded-full z-1000' ></div>
//             <div className='box3 w-4 h-4 bg-[#F54C0F] absolute left-[75%] rounded-full z-1000' ></div>
//         </div>
//     </section>
//   )
// }

// export default Animation
