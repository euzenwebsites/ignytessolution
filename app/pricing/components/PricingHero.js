import React from 'react'
import Image from 'next/image'
import vector1 from "../../../public/Vector1.png"
const PricingHero = () => {
  return (  
    <section className=' h-full w-[100%] flex justify-center pb-10 '>
        <div className='absolute left-0 top-0 '>
            <Image src={vector1} height={800} width={500}  alt='vector' style={{height:"30%",width:"90%"}}/></div>

    <div className='w-[80%] flex flex-col justify-center items-center'>  
        <div className='py-48 text-center'>
             <h1 className='text-[#fff] text-5xl sm:text-7xl font-black uppercase text-change'>CUSTOMIZED </h1>
             <h1 className='text-[#fff] text-5xl sm:text-7xl font-black uppercase second-heading'>PRICING</h1>
        </div>
    </div>
    </section>
  )
}

export default PricingHero



