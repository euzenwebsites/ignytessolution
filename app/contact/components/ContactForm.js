import Form from '@/app/components/ui/Form'
import React from 'react'

const ContactForm = () => {
  return (
    <section className='h-full w-[100%] flex justify-center  mt-36 mb-28'>
     <div className='w-[80%] flex flex-col text-[#fff]  '>
     <div className='mb-32'>
        <h3 className='font-extrabold text-base uppercase mb-10 text-center '>THE INFO</h3>
        <h1 className='font-bold text-2xl sm:text-4xl '>Please use the form below to get in<span className='second-heading'> contact with us.</span> </h1>
      </div>
      <Form/>
    </div>
    </section>
  )
}

export default ContactForm
