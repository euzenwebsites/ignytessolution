import React from 'react'
import Image from 'next/image'
import playbtn from "../../public/playbtn.png"
import vector1 from "../../public/Vector1.png"
import AboutAnimation from './animations/AboutAnimation'
import Button from './ui/Button'
const HomeHero = () => {
  return (
    <section className=' h-full w-[100%] flex justify-center pb-10 '>
        <div className='absolute left-0 top-20 '>
            <Image src={vector1} height={800} width={500}  alt='vector' style={{height:"30%",width:"90%",zIndex:-400}}/>
        </div>
  
    <div className='w-[80%] flex flex-col justify-center items-center'>  
        <div className='py-48 text-center'>
             <h1 className='text-[#fff] text-4xl sm:text-7xl font-black uppercase text-change'>Revolutionize, </h1>
             <h1 className='text-[#fff] text-4xl sm:text-7xl font-black uppercase second-heading'> Soar, Create.</h1>
        </div>
        <div className='flex flex-col sm:flex-row justify-between mt-20 '>
            <AboutAnimation/>
            <Button/>
        </div>
    </div>
    </section>
  )
}

export default HomeHero
