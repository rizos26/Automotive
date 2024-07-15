import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Alert } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";


import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_correo: '',
    user_telefono: '',
    message: ''
  });

  const [enviado, setEnviado] = useState(null); // Estado inicializado como null

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
      text: `Nombre: ${formData.user_name}\nCorreo: ${formData.user_correo}\ntelefono: ${formData.telefono}\nMensaje: ${formData.message}`
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

  return (
    <Helmet title="Contact">
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h1 className="fw-bold mb-4">Contacta con nosotros</h1>
              <Form onSubmit={sendEmail}>
                <FormGroup className="contact__form">
                  <Input name="user_name" placeholder="Nombre" type="text" value={formData.user_name} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input name="user_correo" placeholder="Correo electrónico" type="email" value={formData.user_correo} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input name="user_telefono" placeholder="Teléfono" type="email" value={formData.user_telefono} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="contact__form">
                <textarea
        name="message"
        rows="5"
        placeholder="Mensaje"
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
                {/* Mostrar mensaje de envío */}
                {enviado === true && <Alert color="success">¡El mensaje se ha enviado correctamente!</Alert>}
                {/* Mostrar mensaje de error */}
                {enviado === false && <Alert color="danger">¡Hubo un problema al enviar el mensaje!</Alert>}
              </Form>
            </Col>
            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Información de Contacto</h6>
                <p><strong>Dirección:</strong> Ctra de San Fernando N-432, km 429, San Fernando, Cádiz</p>
                <p><strong>Teléfono de contacto:</strong> +34 637957259</p>
                <p><strong>Email:</strong> ventasautomotive@gmail.com</p>
                <p><strong>Horarios:</strong> Lunes a Viernes 9am - 7pm</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
