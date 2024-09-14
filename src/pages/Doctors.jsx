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
              <p onClick={()=> speciality === 'Medico general' ? navigate('/doctors') : navigate('/doctors/Medico general')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Medico general" ? "bg-indigo-100 text-black" : ""} `}>Medico general</p>
              <p onClick={()=> speciality === 'Ginecologia' ? navigate('/doctors') : navigate('/doctors/Ginecologia')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Ginecologia" ? "bg-indigo-100 text-black" : ""} `}>Ginecologia</p>
              <p onClick={()=> speciality === 'Dermatologo' ? navigate('/doctors') : navigate('/doctors/Dermatologo')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologo" ? "bg-indigo-100 text-black" : ""} `}>Dermatologo</p>
              <p onClick={()=> speciality === 'Pediatria' ? navigate('/doctors') : navigate('/doctors/Pediatria')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatria" ? "bg-indigo-100 text-black" : ""} `}>Pediatria</p>
              <p onClick={()=> speciality === 'Neurologo' ? navigate('/doctors') : navigate('/doctors/Neurologo')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologo" ? "bg-indigo-100 text-black" : ""} `}>Neurologo</p>
              <p onClick={()=> speciality === 'Gastroenterologo' ? navigate('/doctors') : navigate('/doctors/Gastroenterologo')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologo" ? "bg-indigo-100 text-black" : ""} `}>Gastroenterologo</p>
              <p onClick={()=> speciality === 'Cardiologia' ? navigate('/doctors') : navigate('/doctors/Cardiologia')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Cardiologia" ? "bg-indigo-100 text-black" : ""} `}>Cardiologia</p>
              <p onClick={()=> speciality === 'Odontologo' ? navigate('/doctors') : navigate('/doctors/Odontologo')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Odontologo" ? "bg-indigo-100 text-black" : ""} `}>Odontologo</p>
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