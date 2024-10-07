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
    <div>
      <img src={userData.image} alt="" />

      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name} </p>
      )}
      <hr />
      <div>
        <p>INFORMACION DE CONTACTO</p>

        <div>
          <p>Email:</p>
          <p>{userData.email} </p>
          <p>Telefono:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone} </p>
          )}
          <p>Direccion:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, linea1: e.target.value },
                  }))
                }
                value={userData.address.linea1}
                type="text"
              />
              <br />
            </p>
          ) : (
            <p>{userData.address.linea1}</p>
          )}
        </div>
      </div>
      <div>
        <p>INFORMACION BASICA</p>
        <div>
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
