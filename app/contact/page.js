import React from 'react'
import ContactHero from './components/ContactHero'
import SocialSec from './components/SocialSec'
import Form from '../components/ui/Form'
import ContactForm from './components/ContactForm'

const page = () => {
  return (
    <div>
      <ContactHero/>
      <SocialSec/>
      <ContactForm/>
    </div>
  )
}

export default page
