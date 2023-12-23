import React from 'react'
import Image from "next/image"

import PricingTestimonial from "../../components/ui/Pricing"

const SEOPricing = () => {
  return (
   
    <div className="w-[100%] flex flex-col mt-12">

        {/* heading */}
        <div className="flex flex-col items-center pb-8 pt-8">
        {/* <h5 className="text-[#ffff] text-base font-normal">Vitae tortor condimentum</h5> */}
        {/* <h3 className="font-bold text-3xl text-[#ffff]">SEO Pricing Plan</h3>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div> */}
    </div>
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative mb-20">
            <PricingTestimonial
                package={"Pro"}
                price={"$600"}
                color={"#D9D9D9"}

                item1={"Prior Analysis"}
               item2={"Business Analysis"}
               item3={"Consumer Analysis"}
               item4={"Competitor Analysis"}
               item5={"Selected Keywords Targeting"}
               item6={"Pages Keyword Targeted"}
               item7={"Webpage Optimization"}
              
                
            />
            <PricingTestimonial
                package={"PREMIUM"}
                price={"$900"}
               color={"#D9D9D9"}

               item1={"Prior Analysis"}
               item2={"Consumer Analysis"}
               item3={"Competitor Analysis"}
               item4={"30 Selected Keywords Targeting"}
               item5={"30 Pages Keyword Targeted"}
               item6={"Webpage Optimization"}
               item7={"Meta Tags Creation"}
               
           />
           <PricingTestimonial
                package={"ENTERPRISE"}
                price={"$1200"}
               color={"#D9D9D9"}

               item1={"Prior Analysis"}
               item2={"Business Analysis"}
               item3={"Consumer Analysis"}
               item4={"Competitor Analysis"}
               item5={"70 Selected Keywords Targeting"}
               item6={"50 Pages Keyword Targeted"}
               item7={"Webpage Optimization"}
               
           />
            

    </div>
    </div>
    

  )
}

export default SEOPricing
