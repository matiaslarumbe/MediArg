import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ACERCA DE NOSOTROS{" "}
          <span className="text-gray-700 font-medium">AR</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px] "
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <b className="text-gray-800">Bienvenidos a MediArg</b>
          <p>
            En MediArg, nuestra misión es conectar a los pacientes con los
            mejores médicos en una variedad de especialidades. A través de una
            plataforma moderna y fácil de usar, ofrecemos un servicio ágil y
            accesible para que puedas agendar turnos médicos de manera rápida y
            sencilla.
          </p>
          <p>
            Nuestra plataforma utiliza tecnología avanzada para facilitar la
            interacción entre pacientes y profesionales de la salud. Puedes
            buscar médicos por especialidad, ver sus franjas horarias
            disponibles, y reservar un turno en cuestión de minutos. Además,
            MediArg está optimizado para ofrecerte la mejor experiencia, tanto
            en dispositivos móviles como en tu computadora.
          </p>
          <b className="text-gray-800">Nuestra Vision</b>
          <p>
            En MediArg, creemos que la tecnología es una herramienta clave para
            mejorar la atención médica. Nuestra visión es crear una red de
            atención médica más eficiente, donde los pacientes puedan acceder a
            servicios médicos de calidad sin barreras de tiempo o ubicación. Nos
            esforzamos por ofrecer una atención personalizada y accesible,
            apoyándonos en la innovación tecnológica para simplificar el proceso
            de agendar y gestionar consultas médicas.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          PORQUE{" "}
          <span className="text-gray-700 font-semibold">ELEGIR MEDIARG</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Eficiencia</b>
          <p>
            Agendá tu turno de manera rápida y sencilla, con solo unos clics y
            sin perder tiempo en largas esperas.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Conveniencia</b>
          <p>
            Accedé a una amplia red de médicos desde cualquier lugar, a
            cualquier hora, y con la flexibilidad de elegir las franjas horarias
            que mejor se adapten a vos.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Personalización</b>
          <p>
            Encontrá especialistas que se ajusten a tus necesidades específicas
            y recibí atención médica personalizada en todo momento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;