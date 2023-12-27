
import Image from "next/image"

import PricingTestimonial from "../../components/ui/Pricing"

const SMMPricing = () => {
  return (
   
    <div className="w-[100%] flex flex-col mt-12">

        {/* heading */}
        <div className="flex flex-col items-center pb-8 pt-8">
        {/* <h5 className="text-[#ffff] text-base font-normal">Vitae tortor condimentum</h5> */}
        {/* <h3 className="font-bold text-3xl text-[#ffff]">Socail Media Marketing Pricing Plans</h3>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div> */}
    </div>
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative mb-20">
            <PricingTestimonial
                package={"PRO"}
                price={"$700"}
                color={"#D9D9D9"}
                slogan={"Professional plan"}

                item1={"2 platforms of our choice"}
               item2={"3 post week"}
               item3={"business page optimization"}
               item4={"content creation"}
               item5={"community management"}
            
                
            />
            <PricingTestimonial
                package={"PREMIUM"}
                price={"$1500"}
               color={"#D9D9D9"}
               slogan={"Business plan"}
               item1={"3 platforms of your choice"}
               item2={"5 posts per week"}
               item3={"Business Page Optimization"}
               item4={"Content Creation "}
               item5={"Community Management"}
               item6={"Monthly Progress Report"}
               item7={"Copy Writing "}
               item8={"Likes campaign"}
               
           />
           <PricingTestimonial
                package={"ENTERPRISE"}
                price={"$2500"}
               color={"#D9D9D9"}
               slogan={"Ultimate plan"}

               item1={"4 platforms of your choice"}
               item2={"7 posts per week"}
               item3={"copywriting & visual design"}
               item4={"Business page optimization"}
               item5={"Ad campaign management"}
               item6={"Spam monitoring"}
               item7={"Monthly progress report"}
               item8={"Reputation management"}
               item9={"Social account setup"}
               item10={"Content creation"}
               item11={"Social media hearing"}
               item12={"Query and comments reply"}
               
           />
            

    </div>
    </div>
    

  )
}

export default SMMPricing
