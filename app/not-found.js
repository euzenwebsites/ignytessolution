import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <section className='flex justify-center items-center text-[#fff] mt-36 mb-36'>
        <div >
            <h1 className='text-5xl font-bold '>Opps! This page is not found</h1>
            <h3 className='text-4xl font-semibold mt-10 text-[#e63333] text-center uppercase'><Link href="/">Go to Home page</Link></h3>
        </div>
    </section>
  )
}

export default ErrorPage
