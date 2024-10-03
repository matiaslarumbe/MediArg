import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACTATE</p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-center gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Nuestros CONSULTORIOS</p>
          <p className='text-gray-500'>Azcuenaga 900, CABA</p>
          <p className='text-gray-500'>Tel: (+54) 15-0101-0202<br/> Email: salud@mediarg.com</p>
          
        </div>
      </div>
    </div>
  )
}

export default Contact