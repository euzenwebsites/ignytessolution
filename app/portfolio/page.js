import React from 'react'
import PortfolioHero from './components/PortfolioHero'
import Description from '../components/ui/Description'
import PortfolioContainer from './components/PortfolioContainer'
import Image1 from '../../public/images/logoport1.jpg';
import Image2 from '../../public/images/logoport3.jpg';
import Image3 from '../../public/images/logoport4.jpg';
import Image4 from '../../public/images/webdesport1.jpg';
const page = () => {
  return (
    <div>
      <PortfolioHero />
      <Description
      description = "The carefully designed projects in our portfolio demonstrate a range of ideas, accuracy, and our dedication to providing revolutionary solutions."
      heading="the portfolio"/>
      <PortfolioContainer direction="end" border="l" image1 ={Image1} image2 ={Image2} image3 ={Image3}/>
      <PortfolioContainer direction="start" border="r" image1 ={Image1} image2 ={Image2} image3 ={Image3}/>
      {/* <Description
      description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
      heading="the portfolio"/> */}
      <PortfolioContainer direction="end" border="l" image1 ={Image1} image2 ={Image2} image3 ={Image3}/>
      <PortfolioContainer direction="start" border="r" image1 ={Image1} image2 ={Image2} image3 ={Image3}/>
    </div>
  )
}

export default page
