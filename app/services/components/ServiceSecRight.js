import React from 'react'
import Service01 from "../../../public/images/port1.webp"
import Image from 'next/image'
import Link from 'next/link'
const ServiceSecRight = (props) => {
  return (
    <section className='mt-20 sm:mt-36 pb-36 relative block w-[100%] '>
        <div className='flex flex-col sm:flex-row items-end justify-end'>
            <div className='h-[100%] sm:h-[1000px] w-[100%] sm:w-[60%] '>
                <Image src={props.image} alt={props.alternate} className='h-full w-full object-cover object-center sm:rounded-l-[30px]'/>
            </div>
        <div className='relative sm:absolute left-0 sm:top-28 bg-black z-50 w-[100%] sm:w-[50%] p-8 sm:p-32 sm:rounded-r-[30px] bg-[#121212]'>
            <div className=' flex flex-col gap-10 sm:gap-20  text-[#fff] '>
                <p className='font-extrabold text-base uppercase'>EMPOWERING YOUR GROWTH.</p>
                <h1 className='text-4xl sm:text-5xl font-extrabold uppercase'>{props.service}</h1>
                <p className='text-base font-semibold'>{props.description}</p>
            <div className='w-[150px] h-[150px] box-border pt-16 pl-6 uppercase text-xs font-semibold  rounded-full border-2 border-dashed'>
                <Link href="/portfolio" >view portfolio</Link>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSecRight
