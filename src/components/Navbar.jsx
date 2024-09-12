import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken ] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <Link to={'/'}><img className='w-44 h-auto float-left cursor-pointer' src={assets.logo} alt="" /></Link>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>DOCTORES</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>SOBRE NOSOTROS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACTO</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-10' src={assets.profile_pic} alt=""/>
            <img className='w-2.5' src={assets.dropdown_icon} alt=""/>
            <div  className='absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>Mi Perfil</p>
                <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>Mi citas</p>
                <p onClick={(setToken(false))} className='hover:text-black cursor-pointer'>Cerrar Sesión</p>
              </div>
            </div>
          </div>
          :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Crear una cuenta</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar