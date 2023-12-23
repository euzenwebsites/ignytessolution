import React from 'react'
import Image from 'next/image'
import vector2 from "../../../public/images/vector2.svg"
const VectorRight = () => {
  return (
    <div className='absolute right-0 -z-1'><Image src={vector2} height={800} width={500} /></div>

  )
}

export default VectorRight
