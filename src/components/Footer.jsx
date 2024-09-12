import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            {/* ------ seccion izquierdo--------- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Tu plataforma para hacer consultas con doctores de distintas especialidades.</p>
            </div>
            {/* ------ seccion centro--------- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPAÑIA</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>Doctores</li>
                    <li>Sobre Nosotros</li>
                    <li>Política de privacidad</li>
                </ul>
            </div>
            {/* ------ seccion derecho--------- */}
            <div>
                <p className='text-xl font-medium mb-5'>CONTACTATE</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+54-15-0101-0202</li>
                    <li>salud@mediarg.com</li>
                </ul>
            </div>
        </div>
        {/* --------Copyright texto ----------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2024  MediArg - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer