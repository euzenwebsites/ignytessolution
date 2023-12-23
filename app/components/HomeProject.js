import React from 'react'
import Image from 'next/image'
import vector2 from "../../public/images/vector2.svg"
import ProjectAnimation from './animations/ProjectAnimation'
import Carousal from './ui/Carousal'

const HomeProject = () => {
  return (
    <>
    <section className=' h-full w-[100%] flex justify-center text-[#fff] pt-36 pb-28'>
      <div className='absolute right-0 '><Image src={vector2} height={800} width={500} className='-z-100'/></div>
     <div className='w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-10 '>
        <div className=''>
            <Carousal/>
        </div>
        <div>
          <ProjectAnimation/>
        </div>
        

    </div>
    </section>
    </>
  )
}

export default HomeProject
