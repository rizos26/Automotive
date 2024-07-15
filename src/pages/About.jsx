import React from "react";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/about.jpg";
import sillon from "../assets/all-images/recaro.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
          <Col lg="6" md="6" sm="12" className="d-flex justify-content-center">
  <div className="about__page-img">
    <img
      src={driveImg}
      alt=""
      className="img-fluid rounded-3"
      style={{ maxWidth: "100%", height: "auto", maxHeight: "500px" }} // Establecemos el tamaño máximo y la altura máxima de la imagen
    />
  </div>
</Col>



            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">Nuestros Valores</h2>
                <p className="section__description">
                  <strong>Integridad:</strong> Actuamos con honestidad y transparencia en todas nuestras interacciones. <br />
                  <strong>Excelencia:</strong> Nos esforzamos por superar las expectativas y brindar una experiencia excepcional. <br />
                  <strong>Compromiso con el Cliente:</strong> Nos dedicamos a entender y satisfacer las necesidades de nuestros clientes. <br />
                  <strong>Innovación:</strong> Abrazamos la tecnología y buscamos soluciones avanzadas y eficientes. <br />
                  <strong>Pasión por el Automóvil:</strong> Nuestra pasión por los vehículos impulsa todo lo que hacemos, ofreciendo una experiencia única a nuestros clientes. <br />
                  <strong>Confianza:</strong> Construimos relaciones basadas en la confianza, asegurando que nuestros clientes se sientan seguros y respaldados en cada paso del camino.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Conoce</h6>
              <h2 className="section__title">Nuestro Equipo</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
