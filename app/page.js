import Contactform from "./components/ContactForm";
import HomeHero from "./components/HomeHero";
import HomeProject from "./components/HomeProject";
import HomeService from "./components/HomeService";
import PricingTestimonials from "./components/PricesTestimonials";
import ContactForm from "./components/ContactForm";
// import Animation from "./components/ui/Animation";
// import CustomCursor from "./components/animations/CustomCursor";   




export default function Home() {
  return (
    <main>
        {/* <CustomCursor/> */}
        {/* <Animation/> */}
        <HomeHero/>
        <HomeProject/>
        <HomeService/>
        <PricingTestimonials/>
        <ContactForm/>
    </main>
  )
}
