"use client"
import Pricing from "../components/ui/Pricing"
import Image from "next/image";
import WebPricing from "../pricing/components/WebPricing";
import WebDesPricing from "../pricing/components/WebDesPricing";
import SMMPricing from "../pricing/components/SMMPricing";
import VideoPricing from "../pricing/components/VideoPricing";
import MobilePricing from "../pricing/components/MobilePricing";
import LogoPricing from "../pricing/components/LogoPricing";
import BrandingPricing from "../pricing/components/BrandingPricing";
import SEOPricing from "../pricing/components/SEOPricing";
import { useState } from "react";
import "../globals.css"

const contentItems = {
  "Website Development": <WebDesPricing />,
  "SEO": <SEOPricing />,
  "Mobile App Development": <MobilePricing />,
  "Logo Designing": <LogoPricing />,
  "Branding": <BrandingPricing />,
  "Video Animation": <VideoPricing />,
  "Social Media Marketing": <SMMPricing />,
};

const PricingTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState("Website Development"); 

  const handleSwitch = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="h-full relative max-h-full  flex justify-center text-white w-[100%] pt-28">
      
      <div className="w-[80%] flex flex-col">
        
      <div className="text-center">
      <h3 className='capitalize text-4xl sm:text-5xl font-bold text-change'>OUR PRICING</h3>
      </div>

        <div className="pt-20  grid grid-cols-4 max-md:grid-cols-4 gap-2 max-sm:grid-cols-2">

          {Object.keys(contentItems).map((index) => (
            <button key={index} onClick={() => handleSwitch(index)} 
            className={`text-[#000] p-4 max-sm:p-2 bg-[#D9D9D9]  rounded-lg hover:bg-[#E41B26] hover:text-[#D9D9D9] ${activeIndex === index ? 'active-btn' : ''}`}>
            
    
              {index}
            </button>
          ))}
        </div>

        {contentItems[activeIndex]}
        </div>
    </section>
  );
};

export default PricingTestimonials;
