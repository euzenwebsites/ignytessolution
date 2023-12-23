import React from 'react'
import ServiceHero from './components/ServiceHero'
import ServiceSection from './components/ServiceSection'
import ServiceSecRight from './components/ServiceSecRight'
import Description from '../components/ui/Description'
import ServiceAccordion from './components/ServiceAccordion'
import SerWeb from "../../public/images/serwebsite.jpg"
import SerSEO from "../../public/images/serseo.jpg"
import SerApp from "../../public/images/serapp.jpg"
import SerSMM from "../../public/images/serdigital-marketing.jpg"
import SerBranding from "../../public/images/ser-branding.jpg"
import SerGraphics from "../../public/images/ser-graphic-desinger.jpg"

const page = () => {
  return (
    <div>
      <ServiceHero/>
      <ServiceAccordion/>  
      <Description
      description = "Our services are designed to help your organization achieve long-term success and growth through a combination of creativity and experience."
      heading="the services"
      
      />
      <ServiceSection
      service="Web design & Developemnt"
      description="Well-designed web development solutions that are customized to meet your demands and display a wide range of work that highlights creativity, adaptability, and customer success."
      image={SerWeb}
      />
      
      <ServiceSecRight
      service="Search Engine Optimization"
      description="By providing strategic SEO solutions, we enable businesses to expand organically, as seen by the successful portfolio of increased online visibility that we have built."
      image={SerSEO}/>
      <ServiceSection
      service="Social Media Marketing"
      description="Our service creates compelling social strategies that encourage participation and connections, as shown by the vibrant social networks in our impressive portfolio."
      image={SerSMM}/>
      <ServiceSecRight
      service="App Development"
      description="With a specialty in app development, we combine creativity and usability, as shown by the wide range of powerful, user-friendly digital solutions in our portfolio."
      image={SerApp}/>
      <ServiceSection
      service="Graphics designing"
      description="Our service creates compelling social strategies that encourage participation and connections, as shown by the vibrant social networks in our impressive portfolio."
      image={SerGraphics}/>
      <ServiceSecRight
      service="Branding"
      description="With a specialty in app development, we combine creativity and usability, as shown by the wide range of powerful, user-friendly digital solutions in our portfolio."
      image={SerBranding}/>
      
    </div>
  )
}

export default page
