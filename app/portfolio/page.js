import React from 'react'
import PortfolioHero from './components/PortfolioHero'
import Description from '../components/ui/Description'
import PortfolioContainer from './components/PortfolioContainer'
import Image1 from '../../public/images/logoport1.jpg';
import Image2 from '../../public/images/logoport3.jpg';
import Image3 from '../../public/images/logoport4.jpg';
import Image4 from '../../public/images/webdesport1.jpg';
import LogoPort1 from '../../public/images/logoport.jpg';
import LogoPort2 from '../../public/images/logoport-2.jpg';
import LogoPort3 from '../../public/images/logoport-3.jpg';
import WebPort1 from '../../public/images/webport.jpg';
import WebPort2 from '../../public/images/webport2.jpg';
import WebPort3 from '../../public/images/webport3.jpg';
import MobilePort1 from '../../public/images/mobileport.jpg';
import MobilePort2 from '../../public/images/mobile-1.jpg';
import MobilePort3 from '../../public/images/mobile-2.jpg';




const page = () => {
  return (
    <div>
      <PortfolioHero />
      <Description
      description = "The carefully designed projects in our portfolio demonstrate a range of ideas, accuracy, and our dedication to providing revolutionary solutions."
      heading="the portfolio"/>
      <PortfolioContainer direction="end" border="l" image1 ={LogoPort1} image2 ={LogoPort2} image3 ={LogoPort3} title="Logo designing"/>
      <PortfolioContainer direction="start" border="r" image1 ={WebPort1} image2 ={WebPort2} image3 ={WebPort3} title="Web Design & Development"/>
      {/* <Description
      description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
      heading="the portfolio"/> */}
      <PortfolioContainer direction="end" border="l" image1 ={MobilePort1} image2 ={MobilePort2} image3 ={MobilePort3} title="Mobile App development"/>
      {/* <PortfolioContainer direction="start" border="r" image1 ={Image1} image2 ={Image2} image3 ={Image3} title="Logo designing"/> */}
    </div>
  )
}

export default page
