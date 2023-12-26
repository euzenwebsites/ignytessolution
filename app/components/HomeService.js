import React from 'react'
import branding from "../../public/icon/branding.svg"
import logo from "../../public/icon/logo.svg"
import mobile from "../../public/icon/mobile.svg"
import uiux from "../../public/icon/uiux.svg"
import website from "../../public/icon/website.svg"
import social from "../../public/icon/social.svg"
import Image from 'next/image'

const HomeService = () => {
  return (
    <section className='h-full w-[100%] flex justify-center  mt-36 mb-28 scroll-smooth'>
     <div className='w-[80%] flex flex-col text-[#fff]  '> 
        <div className='mb-20 text-center'>
        <h3 className='capitalize text-4xl sm:text-5xl font-bold text-change'>OUR SERVICES</h3>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-20 uppercase'>
            
                <div className='flex flex-col items-center text-center' >
                    <Image src={website} height={60} className='icon-change' alt='website dev image'/>
                    <h6 className=' text-sm sm:text-lg font-bold mt-4'>website design & development</h6>
                </div>
                <div className='flex flex-col items-center text-center' >
                    <Image src={branding} height={60} className='icon-change' alt='Branding'/>
                    <h6 className='text-sm sm:text-lg font-bold mt-4'>Branding</h6>
                </div>
                <div className='flex flex-col items-center text-center' >
                    <Image src={logo} height={60} className='icon-change' alt='logo design image'/>
                    <h6 className='text-sm sm:text-lg font-bold mt-4'>LOGO DESIGN</h6>
                </div>

                <div className='flex flex-col items-center text-center' >
                    <Image src={mobile} height={60} className='icon-change' alt='app dev image'/>
                    <h6 className='text-sm sm:text-lg font-bold mt-4'>app development</h6>
                </div>
                <div className='flex flex-col items-center text-center' >
                    <Image src={uiux} height={60} className='icon-change' alt='ui/ux image'/>
                    <h6 className='text-sm sm:text-lg font-bold mt-4'>UI/UX Design</h6>
                </div>
                <div className='flex flex-col items-center text-center' >
                    <Image src={social} height={60} className='icon-change' alt='social media marketing image'/>
                    <h6 className='text-sm sm:text-lg font-bold mt-4'>social media marketing</h6>
                </div>
                </div>
                
        
    </div>
    </section>
  )
}

export default HomeService
