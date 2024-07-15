import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "../../styles/car-item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const CarItem = (props) => {
  if (!props.item) {
    return null; // Devuelve null si props.item es undefined
  }

  const { imgUrl, Modelo, Especificaciones, Precio, Año, km, CV, cambio, combustible, Rent } = props.item;

  const whatsappMessage = `¿Estás interesado en el ${Modelo}? Ante cualquier consulta, estamos a su disposición.`;

  const openWhatsApp = () => {
    const phoneNumber = "637957259"; // Reemplaza con tu número de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <Carousel showArrows={true}>
          {imgUrl.map((img, index) => (
            <div key={index}>
              <img src={img} alt="" className="w-100" />
            </div>
          ))}
        </Carousel>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{Modelo}</h4>
          <p className="text-center">{Especificaciones}</p>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span>{`${km} km`}</span>
            <span>{Año}</span>
            <span>{combustible}</span>
            <span>{`${CV} CV`}</span>
            <span>{cambio}</span>
          </div>

          <div className="rent__price text-center mt-4">
            <span>Precio: </span>
            <button className="price-button">{Precio}</button>
          </div>
          <div className="d-flex justify-content-start align-items-center mt-4"> {/* Contenedor para botones y WhatsApp */}
  <button className="car__item-btn car__btn-rent" style={{ width: "150px" }}>
    <Link to={'/cars/${Modelo}'}>Reservar</Link>
  </button>

  <button className="car__item-btn car__btn-details ms-2" style={{ width: "150px" }}>
    <Link to={`/cars/${Modelo}`}>Ver detalles</Link>
  </button>

  {/* Ícono de WhatsApp */}
  <div className="car__whatsapp-icon ms-2" onClick={openWhatsApp} style={{ cursor: 'pointer' }}>
    <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />
  </div>
</div>

          </div>
        </div>
    </Col>
  );
};

export default CarItem;