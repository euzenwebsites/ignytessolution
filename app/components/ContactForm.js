// "use client"

import mailIcon from "../../public/icon/mailus.png" 
import mapIcon from "../../public/icon/mapvec.png" 
import Link from "next/link"
import Image from "next/image"
import vector3 from "../../public/images/vector3.svg" 

import Form from "../components/ui/Form"
const Contactform = () => {
 
    return (
    <section className=" flex flex-col items-center h-full pt-28 pb-20 relative ">
        <div className="absolute left-0 top-0">
            <Image src={vector3} alt="vector in red" height={800} width={500} style={{height:"40%",width:"50%",zIndex:-400}}/>
        </div>

    <h3 className='capitalize text-4xl sm:text-5xl font-bold text-[#DEE1E6] text-center mb-16 text-change'>CONTACT US</h3>
<div className="w-[80%] flex flex-row max-sm:flex-col gap-8 ">
    <div className="w-1/2 max-sm:w-full max-sm:text-center">
        <div className="text-[#C1C1D1]">
            <h2 className="text-2xl sm:text-4xl pb-2">Got a query? Contact Us</h2>
        </div>
        <div className="text-[#DEE1E6] text-sm">
            <Link href="/"><p><span className="inline-flex pr-2"><Image src={mapIcon} alt="map icon" className="filter-apply"/></span>18601 FM 1431 Ste 104 #2053 Jonestown, TX 78645</p></Link>
            <Link href="mailto:inquiry@ignytessolutions.com"><span className="inline-flex pr-2"><Image src={mailIcon} alt="mail icon" className="filter-apply"/></span>inquiry@ignytessolutions.com</Link>
        </div>
    </div>
    <Form/>
</div>
   
    </section>
    

  )
}

export default Contactform
