
import Image from "next/image"

import PricingTestimonial from "../../components/ui/Pricing"

const LogoPricing = () => {
  return (
  
    <div className="w-[100%] flex flex-col mt-12">

        {/* heading */}
        <div className="flex flex-col items-center pb-8 pt-8">
{/*         
        <h3 className="font-bold text-3xl text-[#ffff]">Logo Designing Pricing Plan</h3>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div> */}
    </div>
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative mb-20">
            <PricingTestimonial
                package={"Pro"}
                price={"$150"}
                slogan={"Logo premium"}
                color={"#D9D9D9"}
                item1={"12 original logo concepts"}
                item2={"unlimited revisions"}
                item3={"4 dedicated Logo Designer"}
                item4={"Stationery Designs"}
                item5={"Email Signature Design "}
                item6={"With Grey Scale Format"}
                item7={"Free Icon Design"}
                item9={"Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG"}
                item10={"Dedicated Account Manager"}
                item11={"100% Ownership Rights"}
               

                
              
                
            />
            <PricingTestimonial
                package={"PREMIUM"}
                price={"$350"}
                slogan={"Logo Ultimate"}
               color={"#D9D9D9"}
               item1={"Unlimited Original Logo Concepts"}
               item2={"Unlimited Revisons"}
               item3={"8 dedicated Logo Designer"}
               item4={"Stationery Designs"}
               item5={"T shirt Design"}
               item6={"Merhandise Design (2 items of your choice)"}
               item7={"5 scond logo animation"}
               item9={"Email Signature Design"}
               item10={"With Grey Scale Format"}
               item11={"Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG"}
               item12={"Dedicated Account Manager"}
               item13={"100% Ownership Rights"}
               item14={"100% Money Back Guarantee"}

           />
           <PricingTestimonial
                package={"ENTERPRISE"}
                price={"$600"}
                slogan={"Logo boss"}
               color={"#D9D9D9"}
               item1={"Unlimited Original Logo Concepts"}
               item2={"Unlimited Revisons"}
               item3={"8 dedicated Logo Designer"}
               item4={"Stationery Designs"}
               item5={"T shirt Design"}
               item6={"Merhandise Design (2 items of your choice)"}
               item7={"Packaging Design"}
               item9={"15 seconds logo Animation"}
               item10={"Email Signature Design"}
               item11={"100% Ownership Rights"}
               item12={"100 premium letterheads"}
               item13={"100 premium business cards"}
               item14={"100 envelopes"}
               
           />
            

    </div>
    </div>
    

  )
}

export default LogoPricing
