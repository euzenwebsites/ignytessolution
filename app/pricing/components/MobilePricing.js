import React from 'react'
import Image from "next/image"

import PricingTestimonial from "../../components/ui/Pricing"

const MobilePricing = () => {
  return (
  
    <div className="w-[100%] flex flex-col mt-12">

        {/* heading */}
        <div className="flex flex-col items-center pb-8 pt-8">
        {/* <h5 className="text-[#ffff] text-base font-normal">Vitae tortor condimentum</h5> */}
        {/* <h3 className="font-bold text-3xl text-[#ffff]">Mobile App Development Pricing Plan</h3>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div> */}
    </div>
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative mb-20">
            <PricingTestimonial
                package={"Basic"}
                price={"$2560"}
                color={"#D9D9D9"}

                item1={"50% Upfront to get started with the work immediately"}
               item2={"No. of Features Up to 7"}
               item3={"Wireframing"}
               item4={"Intuitive UI UX (Custom App Design)"}
               item5={"Social Media Integration"}
               item6={"App Testing"}
               item7={"Publishing on App Store"}
               item9={"Paid bug support ($350/m)"}
               item10={"Native iOS OR Android app"}
                
            />
            <PricingTestimonial
                package={"Standard"}
                price={"$4160"}
               color={"#D9D9D9"}

               item1={"50% Upfront to get started with the work immediately"}
               item2={"No. of Features Up to 10"}
               item3={"Wireframing"}
               item4={"Intuitive UI UX (Custom App Design)"}
               item5={"Social Media Integration"}
               item6={"App Testing"}
               item7={"Ads Network Integration"}
               item9={"Firebase Integration"}
               item10={"Publishing on App Store"}
               item11={"1 Month free bug support"}
               item12={"Native iOS OR Android app"}
               item13={"Messaging API Integration (Live Chat)"}
               item14={"Google Maps Integration"}
               
           />
           <PricingTestimonial
                package={"Business"}
                price={"$10,000"}
               color={"#D9D9D9"}
               item1={"25% Upfront to get started with the work immediately"}
               item2={"No. of Features Up to 25"}
               item3={"Wireframing"}
               item4={"Ads Network Integration"}
               item5={"Firebase Integration"}
               item6={"App Store Optimization"}
               item7={"3 Month free bug support"}
               item9={"Native iOS OR Android app"}
               item10={"Cross-Platform (Hybrid) On Demand"}
               item11={"Regular App Updates Yearly 1 Update"}
               item12={"Audio/Video Streaming"}
               item13={"Payment Gateways Integration"}
               item14={"Shopping Cart"}
               
           />
            

    </div>
    </div>
    

  )
}

export default MobilePricing
