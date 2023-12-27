import PricingTestimonial from "../../components/ui/Pricing"

import Image from "next/image"



const WebDesPricing = () => {
  return (
   
    <div className="w-[100%] flex flex-col mt-12">

        {/* heading */}
    <div className="flex flex-col items-center pb-8 pt-8">
        {/* <h3 className="font-bold text-3xl text-[#ffff]">Website Designing Pricing Plans</h3>
        <div className='bg-[#FF9E18] h-[1px] w-56 mt-8'></div> */}
    </div>
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-8 justify-center mt-6 relative mb-20">
            <PricingTestimonial
                package={"PRO"}
                price={"$350"}
                color={"#D9D9D9"}
               slogan={"Basic Website Package"}
               item1={"High End Design"}
               item2={"Custom UI/UX"}
               item3={"3 page Website"}
               item4={"Complete W3C Certified HTML"}
               item5={"Complete Deployment"}
               item6={"2 Stock Images "}
               item7={"1 jQuery Slider Banner "}
               item8={"Contact/Query Form"}
               item9={"Unlimited Revisionss"}
               item10={"100% Ownership Rights"}
               item11={"100% Satisfaction Guarantee"}
               item12={"100% Unique Design Guarantee "}


               
                
            />
            <PricingTestimonial
                package={"PREMIUM"}
                price={"$550"}
               color={"#D9D9D9"}
               slogan={"Startup Website Package"}
               item1={"Word press"}
               item2={"High End Design"}
               item3={"Custom UI/UX"}
               item4={"5 Page Website"}
               item5={"5 Stock Images "}
               item6={"3 Banner Design "}
               item7={"1 jQuery Slider Banner "}
               item8={"Free Google Friendly Sitemap"}
               item9={"Contact/Query Form"}
               item10={"Unlimited Revisions"}
               item11={"Complete W3C Certified HTML"}
               item12={"Complete Deployment "}
               item13={"Dedicated Accounts Manager "}
               item14={"100% Ownership Rights"}
               item15={"100% Satisfaction Guarantee "}
               item16={"100% Unique Design Guarantee "}
               
           />
           <PricingTestimonial
                package={"ENTERPRISE"}
                price={"$950"}
               color={"#D9D9D9"}
               slogan={"Professional Website Package"}
               item1={"Word press"}
               item2={"High End Design"}
               item3={"Custom UI/UX"}
               item4={"10 Unique Page Website  "}
               item5={"CMS / Admin Panel Support"}
               item6={"8 Stock Images"}
               item7={"5 Banner Designs "}
               item8={"1 jQuery Slider Banner "}
               item9={"Free Google Friendly Sitemap "}
               item10={"Contact/Query Form"}
               item11={"Unlimited Revisions "}
               item12={"Complete W3C Certified HTML"}
               item13={"Complete Deployment "}
               item14={"Dedicated Accounts Manager"}
               item15={"100% Ownership Rights"}
               item16={"100% Satisfaction Guarantee "}
               item17={"100% Unique Design Guarantee "}
               
           />
            

    </div>
    </div>
    

  )
}

export default WebDesPricing
