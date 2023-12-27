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
                price={"$3500"}
                color={"#D9D9D9"}

                item1={"Prior Analysis "}
               item2={"Business Analysis "}
               item3={"Consumer Analysis"}
               item4={"15 selected Keywords Targeting"}
               item5={"15 Pages Keywords Targeting"}
               item6={"Webpage Optimization"}
               item7={"Meta Tags Creation "}
               item8={"Keyword Optimization"}
               item9={"Image Optimization"}
               item10={"Inclusion of Anchors "}
               item11={"Tracking & Amp, Analysis "}
               item12={"Google Analytics Installation"}
               item13={"Google Webmaster Installation"}
               item14={"Call to Action Plan "}
               item15={"Creation of Sitemaps "}
               itme16={"Monthly Reporting"}
               itme17={"Recommendation "}
               itme18={"Email Support"}
               itme19={"Phone Support"}
               itme20={"Off Page Optimization"}
               itme21={"Social Bookmarking"}
               itme22={"Slide Share Marketing"}
               item23={'Forums/ FAQ`S'}
               item24={"Link Building"}
               item25={"Directory Submission"}
               item26={"Local Business Listings"}


               
              
                
            />
            <PricingTestimonial
                package={"PREMIUM"}
                price={"$5000"}
               color={"#D9D9D9"}

               item1={"Prior Analysis "}
               item2={"Business Analysis "}
               item3={"Consumer Analysis"}
               item4={"30 selected Keywords Targeting"}
               item5={"30 Pages Keywords Targeting"}
               item6={"Webpage Optimization"}
               item7={"Meta Tags Creation "}
               item8={"Keyword Optimization"}
               item9={"Image Optimization"}
               item10={"Inclusion of Anchors "}
               item11={"Tracking & Amp, Analysis "}
               item12={"Google Analytics Installation"}
               item13={"Google Webmaster Installation"}
               item14={"Call to Action Plan "}
               item15={"Creation of Sitemaps "}
               itme16={"Monthly Reporting"}
               itme17={"Recommendation "}
               itme18={"Email Support"}
               itme19={"Phone Support"}
               itme20={"Off Page Optimization"}
               itme21={"Social Bookmarking"}
               itme22={"Slide Share Marketing"}
               item23={'Forums/ FAQ`S'}
               item24={"Link Building"}
               item25={"Directory Submission"}
               item26={"Local Business Listings"}

               
           />
           <PricingTestimonial
                package={"ENTERPRISE"}
                price={"$7500"}
               color={"#D9D9D9"}

               item1={"Prior Analysis "}
               item2={"Business Analysis "}
               item3={"Consumer Analysis"}
               item4={"70 selected Keywords Targeting"}
               item5={"50 Pages Keywords Targeting"}
               item6={"Webpage Optimization"}
               item7={"Meta Tags Creation "}
               item8={"Keyword Optimization"}
               item9={"Image Optimization"}
               item10={"Inclusion of Anchors "}
               item11={"Tracking & Amp, Analysis "}
               item12={"Google Analytics Installation"}
               item13={"Google Webmaster Installation"}
               item14={"Call to Action Plan "}
               item15={"Creation of Sitemaps "}
               itme16={"Monthly Reporting"}
               itme17={"Recommendation "}
               itme18={"Email Support"}
               itme19={"Phone Support"}
               itme20={"Off Page Optimization"}
               itme21={"Social Bookmarking"}
               itme22={"Slide Share Marketing"}
               item23={'Forums/ FAQ`S'}
               item24={"Link Building"}
               item25={"Directory Submission"}
               item26={"Local Business Listings"}
               item27={"Blog Content Creation"}
               item28={"Local SEO"}

               
           />
            

    </div>
    </div>
    

  )
}

export default SEOPricing
