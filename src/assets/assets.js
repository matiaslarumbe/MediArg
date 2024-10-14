import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import about_image from "./about_image.jpeg";
import contact_image from "./contact_image.jpeg"
import logo from "./logo.png";
import dropdown_icon from "./dropdown_icon.png";
  import menu_icon from "./menu_icon.png";
import cross_icon from "./cross_icon.png";
// import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.png";
import arrow_icon from "./arrow_icon.png";
import info_icon from "./info_icon.png";
// import upload_icon from "upload_icon.png";
// import stripe_logo from "./stripe_logo.png";
// import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import Dermatologist from "./dermatologia-icon.png";
import Gastroenterolgist from "./gastroenterologia-icon.png";
import General_physician from "./medico-general.png";
import Gynecologist from "./ginecologia-icon.png";
import Neurologist from "./neurologia-icon.png";
import Pediatricians from "./pediatria-icon.png";
import Dentist from "./odontologia-icon.png";
import Cardiologist from "./cardiologia-icon.png";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  profile_pic,
  about_image,
  contact_image,
  logo,
  dropdown_icon,
  menu_icon,
  cross_icon,
  // chats_icon,
  verified_icon,
  arrow_icon,
  info_icon,
  // upload_icon,
  // stripe_logo,
  // razorpay_logo,
};

export const specialityData = [
  {
    speciality: "Medico general",
    image: General_physician,
  },
  {
    speciality: "Ginecologia",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologo",
    image: Dermatologist,
  },
  {
    speciality: "Pediatria",
    image: Pediatricians,
  },
  {
    speciality: "Neurologo",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologo",
    image: Gastroenterolgist,
  },
  {
    speciality: "Cardiologia",
    image: Cardiologist,
  },
  {
    speciality: "Odontologo",
    image: Dentist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dra Lopez, Jimena",
    image: doc1,
    speciality: "Ginecologia",
    degree: "Universidad UBA de BS As",
    experience: "4 Años",
    about: "Dra Lopez ha realizado su carrera en...",
    fees: 4000,
    address: {
      line1: "Andres Baranda 1100, Quilmes",
      line2: "Azcuenaga 910, CABA",
    },
  },
  {
    _id: "doc2",
    name: "Dr Perez, Marcos",
    image: doc2,
    speciality: "Medico general",
    degree: "Universidad UBA de BS As",
    experience: "6 Años",
    about: "Dr Perez ha realizado su carrera en...",
    fees: 3800,
    address: {
      line1: "Andres Baranda 1100, Quilmes",
      line2: "Azcuenaga 910, CABA",
    },
  },
  {
    _id: "doc3",
    name: "Dra Juarez, Norma",
    image: doc3,
    speciality: "Pediatria",
    degree: "Universidad UBA de BS As",
    experience: "6 Años",
    about: "Dra Juarez ha realizado su carrera en...",
    fees: 4000,
    address: {
      line1: "Andres Baranda 1100, Quilmes",
      line2: "Azcuenaga 910, CABA",
    },
  },
  {
    _id: "doc4",
    name: "Dra Mobilia, Luana",
    image: doc4,
    speciality: "Pediatria",
    degree: "Universidad UNLP La Plata",
    experience: "4 Años",
    about: "Dra Mobilia ha realizado su carrera en...",
    fees: 4000,
    address: {
      line1: "Andres Baranda 1100, Quilmes",
      line2: "Azcuenaga 910, CABA",
    },
  },
  {
    _id: "doc5",
    name: "Dr Zaracho, Armando",
    image: doc5,
    speciality: "Gastroenterologo",
    degree: "Universidad Católica Argentina, CABA",
    experience: "2 Años",
    about: "Dr Zaracho ha realizado su carrera en...",
    fees: 4200,
    address: {
      line1: "Andres Baranda 1100, Quilmes",
      line2: "Azcuenaga 910, CABA",
    },
  },
  {
    _id: "doc6",
    name: "Dr Cruz, Juan Carlos",
    image: doc6,
    speciality: "Neurologo",
    degree: "Universidad UBA de BS As",
    experience: "6 Años",
    about: "Dra Cruz ha realizado su carrera en...",
    fees: 4000,
    address: {
      line1: "Andres Baranda 1100, Quilmes",
      line2: "Azcuenaga 910, CABA",
    },
  },
  {
    _id: "doc7",
    name: "Dr Orellana, Miguel Alberto",
    image: doc7,
    speciality: "Odontologo",
    degree: "Facultad de Odontología. Hospital Odontología Universitario, CABA",
    experience: "4 Años",
    about: "Dr Orellana ha realizado su carrera en...",
    fees: 4100,
    address: {
      line1: "Andres Baranda 1100, Quilmes",
      line2: "Azcuenaga 910, CABA",
    },
  },
  {
    _id: "doc8",
    name: "Dra Gimenez, Yudith",
    image: doc8,
    speciality: "Dermatologo",
    degree: "Universidad UBA de BS As",
    experience: "4 Años",
    about: "Dra Gimenez ha realizado su carrera en...",
    fees: 4300,
    address: {
      linea1: "Andres Baranda 1100, Quilmes",
      linea2: "Azcuenaga 910, CABA",
    },
  },
  {
    _id: "doc9",
    name: "Dra Riveras, Camila",
    image: doc9,
    speciality: "Cardiologia",
    degree: "Universidad UBA de BS As",
    experience: "4 Años",
    about: "Dra Riveras ha realizado su carrera en...",
    fees: 3800,
    address: {
      linea1: "Andres Baranda 1100, Quilmes",
      linea2: "Azcuenaga 910, CABA",
    },
  },
  {
    _id: "doc10",
    name: "Dra Porro, Jazmin",
    image: doc10,
    speciality: "Medico general",
    degree: "Universidad UBA de BS As",
    experience: "5 Años",
    about: "Dra Porro ha realizado su carrera en...",
    fees: 3800,
    address: {
      line1: "Andres Baranda 1100, Quilmes",
      line2: "Azcuenaga 910, CABA",
    },
  },
];

// doc1,
//     doc2,
//     doc3,
//     doc4,
//     doc5,
//     doc6,
//     doc7,
//     doc8,
//     doc9,
//     doc10,
//     Dermatologist,
//     Gastroenterolgist,
//     General_physician,
//     Gynecologist,
//     Neurologist,
//     Pediatricians
