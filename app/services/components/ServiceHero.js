import React from 'react'
import Image from 'next/image'
import playbtn from "../../../public/playbtn.png"
import vector1 from "../../../public/Vector1.png"

const ServiceHero = () => {
  return (
    <section className=' h-full w-[100%] flex justify-center pb-10 '>
        <div className='absolute left-0 top-20 '>
            <Image src={vector1} height={800} width={500}  alt='vector' style={{height:"30%",width:"90%"}}/></div>

    <div className='w-[80%] flex flex-col justify-center items-center'>  
        <div className='py-48 text-center'>
             <h1 className='text-[#fff] text-5xl sm:text-7xl font-black uppercase text-change'>our</h1>
             <h1 className='text-[#fff] text-5xl sm:text-7xl font-black uppercase second-heading'>services</h1>
        </div>
        
    </div>
    </section>
  )
}

export default ServiceHero



