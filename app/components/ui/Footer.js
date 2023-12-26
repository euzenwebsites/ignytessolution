import Image from "next/image"
import Frame from "../../../public/images/logo.png"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="h-full flex flex-row justify-center ">
    <div className="w-[80%] flex flex-col item-between pt-20 pb-20 ">
        <div className="grid grid-cols-3 max-md:grid-cols-1 ">
          {/* -----------------------first row------------------- */}
        <div className=" max-sm:w-full ">
      <div className="grid grid-cols-2 gap-4">
      <div className="text-[#fff] ">
        <ul className="flex flex-col gap-4">
             <li className="font-bold"><Link href="/">Who we are</Link></li>
            <li><Link href="/services" >Services</Link></li>
            <li><Link href="/portfolio" >Portfolio</Link></li>
            <li><Link href="/prices" >Prices</Link></li>
            <li><Link href="/contact" >Contact Us</Link></li>

        </ul>
      </div>
      <div className="text-[#fff] ">
        <ul className="flex flex-col gap-4">
        <li className="font-bold " >Social</li>
            <li ><Link href='https://www.facebook.com/profile.php?id=61551594675574' target="_blank" > Facebook</Link></li>
            <li ><Link href="https://twitter.com/Ignytessolution" target="_blank" >Twitter</Link></li>
            <li ><Link href="https://www.instagram.com/ignytes_solutions/" target="_blank" >Instagram</Link></li>
            <li ><Link href="https://www.linkedin.com/company/ignytes-solutions/" target="_blank" >linkedin</Link></li>
          
 
        </ul>
      </div>
      <div>
       
      </div>
      </div>
      </div>

      <div className="col-span-2 max-md:col-span-1 max-md:w-full max-sm:hidden text-[#fff] ">
        <h2 className="font-bold text-3xl pb-2">Weekly Newsletter</h2>
        <p className="mb-8">Welcome to our weekly newsletter, where you may access special 
        trends and insights. Jump into insightful content and professional analysis. 
        Get your monthly dose of industry knowledge by subscribing now!</p>
        <div className="flex flex-row max-sm:flex-col" >
            <input type="email " placeholder="Your Email" className="bg-[#DEE1E6] " 
            style={{backgroundColor:"#DEE1E6" , padding:"1rem"}}
            />
            <button className="bg-[#fff] text-[#E9B756] ml-4 max-sm:mt-8"
                style={{padding:"1rem"}}
            >Send</button>
        </div>
      </div>
      </div>
      <div 
      style={{borderTop:"2px solid #fff", paddingTop:"12px"}}>
        <Link href="/" ><Image src={Frame} alt="ignytes solution icon" height={80}/></Link>
      </div>
      </div>
      

      </footer>
  )
}

export default Footer
