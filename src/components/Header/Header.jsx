import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "../../styles/header.css";
import Logo2 from '../../assets/all-images/logo.png';
import Login from "../../pages/Login";

//firebase
import appFirebase from "../../credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase)

const navLinks = [
  {
    path: "/home",
    display: "Inicio",
  },
    {
    path: "/cars",
    display: "Alquiler",
  },

  {
    path: "/ventas",
    display: "Vehículos de ocasión",
  },
    {
    path: "/blogs",
    display: "Actualidad",
  },
  {
    path: "/taller",
    display: "Taller",
  },
  {
    path: "/about",
    display: "Conócenos",
  },
  {
    path: "/contact",
    display: "Contacto",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola! Gracias por comunicarte con Automotive. Estamos aquí para ayudarte. Nuestro horario de atención es de 9 am a 7 pm. ¡Nos pondremos en contacto contigo lo antes posible!"
    );
    window.open(
      `https://wa.me/34637957259?text=${message}`,
      "_blank"
    );
  };

  return (
    <header className="header">

  
      {/* ========== main navigation =========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
  
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                <img src={Logo2} alt="Logo" className="logo" />
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3 flex-wrap">
  {usuario ? <span className="welcome-message">Bienvenido, {usuario.email}</span> : null}
  <Link to={usuario ? "/perfil" : "/login"} className="d-flex align-items-center gap-1 perfil-link">
    <i className="ri-user-line"></i>
  </Link>
</div>

              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
  
};
export default Header;