
import Image from "next/image"


import PricingTestimonial from "../../components/ui/Pricing"

const BrandingPricing = () => {
  return (
    
    <div className="w-[100%] flex flex-col mt-12">

        {/* heading */}
    <div className="flex flex-col items-center pb-8 pt-8">
        {/* <h3 className="font-bold text-3xl text-[#ffff]">Branding Pricing Plan</h3>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div> */}
    </div>
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative mb-20 ">
    
            <PricingTestimonial
                package={"Pro"}
                price={"$99"}
                color={"#D9D9D9"}
                item1={"2 Stationery Design Set"}
               item2={"FREE Fax Template"}
               item3={"Print Ready Formats"}
               item4={"UNLIMITED Revisions"}
               item5={"Satisfaction Guarantee"}
                
            />
            <PricingTestimonial
                package={"PREMIUM"}
                price={"$199"}
               color={"#D9D9D9"}
               item1={"2 Stationery Design Set"}
               item2={"UNLIMITED Revisions"}
               item3={"Flyer Design"}
               item4={"Brochure Design (Bi-fold/Tri-fold)"}
               item5={"Satisfaction Guarantee"}
               
           />
           <PricingTestimonial
                package={"ENTERPRISE"}
                price={"$399"}
               color={"#D9D9D9"}
               item1={"2 Stationery Design Set"}
               item2={"Packaging Design"}
               item3={"UNLIMITED Revisions"}
               item4={"T-Shirt Design"}
               item5={"T shirt Design"}
               item6={"Satisfaction Guarantee"}
               
           />
            
            </div>
    </div>
    
    

  )
}

export default BrandingPricing
