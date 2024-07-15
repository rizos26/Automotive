import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Alert } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import FindCarForm from "../components/UI/FindCarForm";
import spotify from "../assets/all-images/spotify.png";

const CarListing = () => {

  const [formData, setFormData] = useState({
    user_name: '',
    user_correo: '',
    user_matricula: '',
    user_marca: '',
    user_modelo: '',
    user_kilometros: '',
    message: ''
  });

  const [enviado, setEnviado] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      to: 'aragonesalonso00@gmail.com',
      subject: 'Formulario contacto',
      text: `Nombre: ${formData.user_name}\nCorreo: ${formData.user_correo}\nmatricula: ${formData.user_matricula}\nmarca: ${formData.marca}\nmodelo: ${formData.modelo}\nkilometros: ${formData.kilometros}\nMensaje: ${formData.message}`
    };

    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
          console.log('Email enviado con éxito');
          setEnviado(true);
          setFormData({
            user_name: '',
            user_correo: '',
            message: ''
          });
        } else {
          console.error('Error al enviar el email');
          setEnviado(false);
        }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        setEnviado(false);
      });
  };

  const [filtroPrecio, setFiltroPrecio] = useState("");

  const handleFiltroChange = (event) => {
    setFiltroPrecio(event.target.value);
  };

  const filtrarCochesPorPrecio = (coches) => {
    if (filtroPrecio === "low") {
      return coches.sort((a, b) => parseFloat(a.Precio) - parseFloat(b.Precio));
    } else if (filtroPrecio === "high") {
      return coches.sort((a, b) => parseFloat(b.Precio) - parseFloat(a.Precio));
    } else {
      return coches;
    }
  };

  const rentedCars = carData.filter((car) => car.Rent === true);

  return (
    <Helmet title="Cars">
      <Container>
        <Row className="form__row">
          <Col lg="4" md="4">
            <div className="find__cars-left">
              <h2>Encuentra tu camino con alquileres compartidos</h2>
            </div>
          </Col>

          <Col lg="8" md="8" sm="12">
            <FindCarForm />
          </Col>
        </Row>
      </Container>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Filtrar por
                </span>

                <select value={filtroPrecio} onChange={handleFiltroChange}>
                  <option value="">Ordenar por</option>
                  <option value="low">Precio ascendente</option>
                  <option value="high">Precio descendente</option>
                </select>
              </div>
            </Col>

            {filtrarCochesPorPrecio(rentedCars).map((car) => (
              <CarItem item={car} key={car.id} />
            ))}
          </Row>
          <Form onSubmit={sendEmail}>
            <h1>¿Quieres alquilar tu vehículo con nosotros?</h1>
            <FormGroup className="contact__form">
              <Input name="user_name" placeholder="Nombre" type="text" value={formData.user_name} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="contact__form">
              <Input name="user_correo" placeholder="Correo electronico" type="email" value={formData.user_correo} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="contact__form">
              <Input name="user_matricula" placeholder="Matrícula" type="text" value={formData.user_matricula} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="contact__form">
              <Input name="user_marca" placeholder="Marca" type="text" value={formData.user_marca} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="contact__form">
              <Input name="user_modelo" placeholder="Modelo" type="text" value={formData.user_modelo} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="contact__form">
              <Input name="user_kilometros" placeholder="kilómetros" type="text" value={formData.user_kilometros} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="contact__form">
      <textarea
        name="message"
        rows="5"
        placeholder="¿Podría dar más información?"
        value={formData.message}
        onChange={handleChange}
        style={{
          width: '100%',
          maxWidth: '500px',
          height: '150px',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          resize: 'vertical',
        }}
      ></textarea>
    </FormGroup>
            <button className="contact__btn" type="submit">
              Enviar mensaje
            </button>
            {enviado === true && <Alert color="success">¡El mensaje se ha enviado correctamente! En breves nos pondremos en contacto con usted para más información</Alert>}
            {enviado === false && <Alert color="danger">¡Hubo un problema al enviar el mensaje!</Alert>}
          </Form>
          <Row>
            <Col lg="12" className="text-center">
              <a
                href="https://open.spotify.com/playlist/4PBqoj1wxFOQpZplH3g17z?si=OknWWIqPTC2zQPxiahIAAQ&pi=e-t2npfBFCSUSm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={spotify} alt="Spotify Playlist" style={{ width: '150px', marginTop: '20px' }} />
              </a>
            </Col>
          </Row>

        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
