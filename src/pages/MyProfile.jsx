import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Jairo Kiki",
    image: assets.profile_pic,
    email: "jairo@jairo.com",
    phone: "+54 11 5555 6666",
    address: {
      linea1: "av santafe 1122 CABA",
    },
    gender: "Masculino",
    dob: "15-6-1994",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />

      {isEdit ? (
        <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4" type="text" value={userData.name} onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name} </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none " />
      <div>
        <p className="text-neutral-500 underline mt-3">INFORMACION DE CONTACTO</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email} </p>
          <p className="font-medium">Telefono:</p>
          {isEdit ? (
            <input className="bg-gray-100 max-w-52" type="text" value={userData.phone} onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone} </p>
          )}
          <p className="font-medium">Direccion:</p>
          {isEdit ? (
            <p>
              <input className="bg-gray-50" onChange={(e) => setUserData((prev) => ({...prev, address: { ...prev.address, linea1: e.target.value },
                  }))
                }
                value={userData.address.linea1}
                type="text"
              />
              <br />
            </p>
          ) : (
            <p className="text-gray-500">{userData.address.linea1}</p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">INFORMACION BASICA</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p>Genero:</p>
          {isEdit ? <select onChange={(e)=> setUserData(prev =>({...prev,gender: e.target.value}))} value={userData.gender}>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
          : <p>{userData.gender} </p>
      }
      <p>Fecha de nacimiento:</p>
      {
        isEdit
        ? <input type="date" onChange={(e)=> setUserData(prev =>({...prev,dob: e.target.value}))} value={userData.dob} />
        : <p>{userData.dob} </p>
      }
        </div>
      </div>

      <div>
        {
          isEdit
          ? <button onClick={()=>setIsEdit(false)}>Guardar Informacion</button>
          : <button onClick={()=>setIsEdit(true)}>Editar</button>
        }
      </div>

    </div>
  );
};

export default MyProfile;
