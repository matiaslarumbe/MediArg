import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if(speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])
  


  return (
    <div>
      <p className='text-gray-600'>Navegar a través de los médicos especialistas</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
              <p onClick={()=> speciality === '' ? navigate('/doctors') : navigate('/doctors')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Medico general</p>
              <p onClick={()=> speciality === '' ? navigate('/doctors') : navigate('/doctors')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Ginecologia</p>
              <p onClick={()=> speciality === '' ? navigate('/doctors') : navigate('/doctors')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Dermatologo</p>
              <p onClick={()=> speciality === '' ? navigate('/doctors') : navigate('/doctors')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Pediatria</p>
              <p onClick={()=> speciality === '' ? navigate('/doctors') : navigate('/doctors')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Neurologo</p>
              <p onClick={()=> speciality === '' ? navigate('/doctors') : navigate('/doctors')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Gastroenterologo</p>
              <p onClick={()=> speciality === '' ? navigate('/doctors') : navigate('/doctors')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Cardiologia</p>
              <p onClick={()=> speciality === '' ? navigate('/doctors') : navigate('/doctors')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Odontologo</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-5 gap-y-6'>
              {
                filterDoc.map((item,index)=>(
                  <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
                      <img className='h-80 w-full bg-blue-50' src={item.image} alt="" />
                      <div className='p-4'>
                          <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                              <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Disponible</p>
                          </div>
                          <p className='text-gray-900 text-lg font-medium'>{item.name} </p>
                          <p className='text-gray-600 text-sm'>{item.speciality} </p>
                      </div>
                  </div>
              ))
              }
          </div>
        </div>
    </div>
  )
}

export default Doctors