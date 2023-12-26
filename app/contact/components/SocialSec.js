import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import facebookIcon from "../../../public/icon/facebook.png"
import linkedinIcon from "../../../public/icon/linkedin.png"
import twitterIcon from "../../../public/icon/twitter.png"
import instagramIcon from "../../../public/icon/instagram.png"



const SocialSec = () => {
  return (
    <section className='h-full w-[100%] flex justify-center mt-20 mb-20  sm:mt-36 sm:mb-28'>
     <div className='w-[80%] flex flex-col text-[#fff]  '>
        <div>
        <h3 className='font-extrabold text-base uppercase mb-10 text-center  '>THE INFO</h3>
        <h1 className='font-bold text-2xl sm:text-4xl '>Send us a note with any questions, or simply contact us using the <span className='second-heading'> information below.</span> </h1>
        </div>
        <div className='grid max-sm:grid-cols-1 grid-cols-4 mt-10 mb-10 sm:mt-36 sm:mb-24 gap-10 sm:gap-40'>
            <div>
            <h3 className='font-extrabold text-base uppercase mb-4  '>THE ADDRESS</h3>
                <p>ex Inc. Touchdown Dr 1176</p>
            </div>
            <div >
            <h3 className='font-extrabold text-base uppercase mb-4  '>THE INQUIRY</h3>
                <Link href="mailto:inquiry@ignytessolution.com">inquiry@ignytessolution.com</Link>
            </div>
            <div className='sm:col-span-2'>
            <h3 className='font-extrabold text-base uppercase mb-4 '>Social sites</h3>
                <div className='grid grid-cols-2 sm:grid-cols-4  font-medium gap-10'>
                    <div className='flex flex-row items-center'>
                        <Image src={twitterIcon} alt='twitter icon' height={16}/>
                        <Link href="https://twitter.com/Ignytessolution" target='_blank' className='hover:text-red ml-2'>Twitter</Link>
                    </div>
                    <div className='flex flex-row items-center'>
                        <Image src={facebookIcon} alt='Facebook icon' height={16}/>
                        <Link href="https://www.facebook.com/profile.php?id=61551594675574" target='_blank' className='hover:text-red ml-2'>Facebook</Link>
                    </div>
                    <div className='flex flex-row items-center'>
                        <Image src={linkedinIcon} alt='Linkedin icon' height={16}/>
                        <Link href="https://www.linkedin.com/company/ignytes-solutions/" target='_blank' className='hover:text-red ml-2'>Linkedin</Link>
                    </div>
                    <div className='flex flex-row items-center'>
                        <Image src={instagramIcon} alt='Instagram icon' height={16}/>
                        <Link href="https://www.instagram.com/ignytes_solutions/" target='_blank' className='hover:text-red ml-2'>Instagram</Link>
                    </div>
                    
                   

                </div>
            </div>

        </div>

     </div>
    </section>
  )
}

export default SocialSec
