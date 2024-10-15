import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-6 sm:p-8 min-w-[90%] sm:min-w-[340px] lg:min-w-[400px] border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-xl sm:text-2xl font-semibold">
          {state === "Sign Up" ? "Crear una cuenta" : "Login"}
        </p>
        <p className="text-center sm:text-left">
          Por favor {state === "Sign Up" ? "registrarse" : "ingrese"} para
          reservar cita
        </p>
  
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Nombre Completo</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}
  
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
  
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
  
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Crear una cuenta" : "Login"}
        </button>
  
        {state === "Sign Up" ? (
          <p className="text-center">
            ¿Ya tienes una cuenta?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Inicia sesión aquí
            </span>
          </p>
        ) : (
          <p className="text-center">
            Crear una nueva cuenta?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              haga clic aquí
            </span>
          </p>
        )}
      </div>
    </form>
  );
  
 
};

export default Login;
