import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../../styles/footer.css";
import Logo from '../../assets/all-images/logo.png';

const quickLinks = [
  { path: "/cars", display: "Alquiler" },
  { path: "/cars", display: "Vehículos de ocasión" },
  { path: "/blogs", display: "Actualidad" },
  { path: "/cars", display: "Taller" },
  { path: "/about", display: "Conócenos" },
  { path: "/contact", display: "Contacto" },
  { path: "/privacidad", display: "Política de privacidad" },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <img src={Logo} alt="Logo" className="logo" />
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              BIENVENIDOS A AUTOMOTIVE, CONCESIONARIO LÍDER EN LA VENTA Y ALQUILER DE VEHÍCULOS DE MEDIA, ALTA GAMA Y PREMIUM EN LA PROVINCIA DE CÁDIZ. TODA UNA VIDA VINCULADO AL MUNDO DEL MOTOR Y MAS DE 10 AÑOS EN EL SECTOR DE LA VENTA DE AUTOMÓVILES ME AYUDAN A CONOCER MUY BIEN LAS NECESIDADES DE MIS CLIENTES, LA META DE MI EQUIPO ES VUESTRA MÁXIMA SATISFACCIÓN.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Contacta con nosotros</h5>
              <p className="office__info">Ctra de San Fernando N-432, km 429, San Fernando, Cádiz</p>
              <p className="office__info">Teléfono de contacto: +34 637957259</p>
              <p className="office__info">Email: ventasautomotive@gmail.com</p>
              <p className="office__info">Horarios: Lunes a Viernes 9am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6" className="d-flex align-items-center justify-content-end">
            <div className="footer__social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="me-3" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="me-3" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" className="me-3" />
              </a>
              <a href="https://wa.me/34637957259" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}. Todos los derechos reservados. Automotive S.L.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

