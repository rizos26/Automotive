import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import trabajador1 from "../../assets/all-images/Trabajadores/1.png"; 
import trabajador2 from "../../assets/all-images/Trabajadores/2.png";
import trabajador3 from "../../assets/all-images/Trabajadores/3.png";
import trabajador4 from "../../assets/all-images/Trabajadores/4.png";
import trabajador5 from "../../assets/all-images/Trabajadores/5.png";
import trabajador6 from "../../assets/all-images/Trabajadores/6.png";
import trabajador7 from "../../assets/all-images/Trabajadores/7.png";
import trabajador8 from "../../assets/all-images/Trabajadores/8.png";
import trabajador9 from "../../assets/all-images/Trabajadores/9.png";
import trabajador10 from "../../assets/all-images/Trabajadores/10.png";
import trabajador11 from "../../assets/all-images/Trabajadores/11.png";
import trabajador12 from "../../assets/all-images/Trabajadores/12.png";
import trabajador13 from "../../assets/all-images/Trabajadores/13.png";

const OUR__MEMBERS = [
  {
    name: "Andrés Rodríguez",
    experience: "Director General",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador8,
  },
  {
    name: "Carla Moreno",
    experience: "Gestora de Seguros",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador12,
  },
  {
    name: "Juan García",
    experience: "Gerente de Ventas",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador13,
  },
  {
    name: "Sofía Ruiz",
    experience: "Administrativa",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador9,
  },
  {
    name: "Sergio Ramírez",
    experience: "Asesor de Ventas",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador10,
  },
  {
    name: "Elena Castro",
    experience: "Ingeniera Informática",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador11,
  },
  {
    name: "Luis Hernández",
    experience: "Jefe de Taller",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador3,
  },

  {
    name: "Javier González",
    experience: "Competición",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador2,
  },

 

  {
    name: "Pablo Martínez",
    experience: "Mecánico Electrónico",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador4,
  },
  {
    name: "Diego Pérez",
    experience: "Reprogramaciones",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador5,
  },
  {
    name: "Carlos López",
    experience: "Mecánico de Diagnóstico",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador6,
  },
  {
    name: "Andrea Díaz",
    experience: "Mecánica de Inspección",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador7,
  },
  {
    name: "Mario Sánchez",
    experience: "Detailer Profesional",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: trabajador1,
  },


];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
