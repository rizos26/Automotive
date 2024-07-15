import React from "react";
import { Link } from "react-router-dom";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import Testimonial from "../components/UI/Testimonial";
import "../styles/home.css";


import FindCarFormHome from "../components/UI/FindCarFormHome";

import taller from "../assets/all-images/taller.png";
import alquiler from "../assets/all-images/alquiler.png";
import venta from "../assets/all-images/venta.png";
import kilometro from "../assets/all-images/kilometro.png";
import seleccion from "../assets/all-images/seleccion.png";
import financiacion from "../assets/all-images/financiacion.png";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">

              <Col lg="8" md="8" sm="12">
                <FindCarFormHome />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
            {/* =========== car offer section ============= */}
            <section>
  <Container>
    <Row>
    <Col lg="12" className="text-center mb-5">
  <h2 className="section__title" style={{ fontSize: '2.5rem' }}>Últimas Novedades</h2>
</Col>

      {carData.slice(-3).map((item) => (
        <CarItem item={item} key={item.id} />
      ))}
    </Row>
  </Container>
</section>

      {/* ========== services section ============ */}
      <section>
  <Container>
    <Row className="mb-5 d-flex justify-content-center">

    <Col lg="12" className="mb-5 text-center">
        <h6 className="section__subtitle">Descubre nuestros</h6>
        <h2 className="section__title">Servicios Populares</h2>
      </Col>

      <Col lg="4" md="4" sm="12" className="text-center">
        <img src={taller} alt="Taller" className="img-fluid mb-3" />
        <Link to="/Taller">
          <button className="btn btn-primary border-0" style={{ width: '150px', height: '50px', backgroundColor: '#c71212' }}>Ir a Taller</button>
        </Link>
      </Col>

      <Col lg="4" md="4" sm="12" className="text-center">
        <img src={alquiler} alt="Alquiler" className="img-fluid mb-3" />
        <Link to="/cars">
          <button className="btn btn-primary border-0" style={{ width: '150px', height: '50px', backgroundColor: '#c71212' }}>Ver Alquileres</button>
        </Link>
      </Col>

      <Col lg="4" md="4" sm="12" className="text-center">
        <img src={venta} alt="Venta" className="img-fluid mb-3" />
        <Link to="/ventas">
          <button className="btn btn-primary border-0" style={{ width: '150px', height: '50px', backgroundColor: '#c71212' }}>Ver Ventas</button>
        </Link>
      </Col>
    </Row>
  </Container>
   {/* Brand Content */}
   <section className="brand__content-section" style={{ backgroundColor: '#050a2a', padding: '35px 0', color: '#fff' }}>
  <Container>
    <Row className="mb-5 align-items-center justify-content-center">
      <Col xs={12} md={4} className="text-center">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <img src={kilometro} alt="Icono 1" className="img-fluid mr-3" style={{ height: '100px' }} />
          <p style={{ fontSize: '18px', margin: 0 }}>Kilómetros certificados</p>
        </div>
      </Col>
      <Col xs={12} md={4} className="text-center">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <img src={seleccion} alt="Icono 2" className="img-fluid mr-3" style={{ height: '100px' }} />
          <p style={{ fontSize: '18px', margin: 0 }}>Selección de producto</p>
        </div>
      </Col>
      <Col xs={12} md={4} className="text-center">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <img src={financiacion} alt="Icono 3" className="img-fluid mr-3" style={{ height: '100px' }} />
          <p style={{ fontSize: '18px', margin: 0 }}>Financiación personalizada a su medida</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>


</section>
      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Nuestros clientes opinan</h6>
              <h2 className="section__title">Testimonios</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
