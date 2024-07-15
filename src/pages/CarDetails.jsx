import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Alert, Label } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carData from "../assets/data/carData";

const CarDetails = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_correo: '',
    message: '',
    reserva: false,
    dni: '',
    telefono: '',
    fechaHoraReserva: '',
    fechaNacimiento: '',
  });

  const [enviado, setEnviado] = useState(null);
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.Modelo === slug);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateAge = () => {
    const today = new Date();
    const birthDate = new Date(formData.fechaNacimiento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  };

  const validateForm = () => {
    if (formData.reserva) {
      if (!validateAge()) {
        return false;
      }
      return formData.user_name && formData.user_correo && formData.dni && formData.telefono && formData.fechaHoraReserva && formData.fechaNacimiento;
    } else {
      return formData.user_name && formData.user_correo;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      if (formData.reserva && !validateAge()) {
        setEnviado('menor');
      } else {
        setEnviado('incompleto');
      }
      return;
    }

    let text = `Nombre: ${formData.user_name}\nCorreo: ${formData.user_correo}\nMensaje: ${formData.message}`;
    if (formData.reserva) {
      text += `\nReserva: Sí\nDNI: ${formData.dni}\nTeléfono: ${formData.telefono}\nFecha y Hora de Reserva: ${formData.fechaHoraReserva}\nFecha de Nacimiento: ${formData.fechaNacimiento}`;
    } else {
      text += `\nReserva: No`;
    }

    const data = {
      to: 'aragonesalonso00@gmail.com',
      subject: 'Formulario contacto',
      text: text
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
          setEnviado(formData.reserva ? 'reservado' : 'enviado');
          setFormData({
            user_name: '',
            user_correo: '',
            message: '',
            reserva: false,
            dni: '',
            telefono: '',
            fechaHoraReserva: '',
            fechaNacimiento: '',
          });
        } else {
          console.error('Error al enviar el email');
          setEnviado('error');
        }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        setEnviado('error');
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem ? singleCarItem.Modelo : "Detalles del coche"}>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Carousel showArrows={true}>
                {singleCarItem && singleCarItem.imgUrl.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt="" style={{ width: "50%" }} />
                  </div>
                ))}
              </Carousel>
            </Col>

            <Col lg="12">
              {singleCarItem && (
                <div className="car__info">
                  <h2 className="section__title">{singleCarItem.Modelo}</h2>

                  <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                    <h6 className="rent__price fw-bold fs-4">
                      {singleCarItem.Precio}
                    </h6>
                  </div>

                  <p className="section__description">
                    {singleCarItem.Especificaciones}
                  </p>

                  <h5>Descripción:</h5>
                  <ul>
                    {Object.keys(singleCarItem.descripcion.caracteristicas).map((category, index) => (
                      <div key={index}>
                        <h6>{category}</h6>
                        <ul>
                          {singleCarItem.descripcion.caracteristicas[category].map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </Col>
            <Form onSubmit={sendEmail}>
              <h1>¿Necesitas más información?</h1>
              <FormGroup className="contact__form">
                <Input name="user_name" placeholder="Nombre" type="text" value={formData.user_name} onChange={handleChange} />
              </FormGroup>
              <FormGroup className="contact__form">
                <Input name="user_correo" placeholder="Correo electronico" type="email" value={formData.user_correo} onChange={handleChange} />
              </FormGroup>
              <FormGroup className="contact__form">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Mensaje"
                  className="textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="reserva"
                    checked={formData.reserva}
                    onChange={handleChange}
                  />{' '}
                  ¿Quieres reservar el vehículo?
                </Label>
              </FormGroup>
              {formData.reserva && (
                <>
                  <FormGroup className="contact__form">
                    <Input name="dni" placeholder="DNI" type="text" value={formData.dni} onChange={handleChange} />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Input name="telefono" placeholder="Teléfono" type="text" value={formData.telefono} onChange={handleChange} />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Label for="fechaHoraReserva">Fecha y Hora de Reserva</Label>
                    <Input
                      type="datetime-local"
                      name="fechaHoraReserva"
                      value={formData.fechaHoraReserva}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Label for="fechaNacimiento">Fecha de Nacimiento</Label>
                    <Input
                      type="date"
                      name="fechaNacimiento"
                      value={formData.fechaNacimiento}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </FormGroup>
                </>
              )}
              <button className="contact__btn" type="submit">
                Enviar mensaje
              </button>
              {/* Mostrar mensaje de envío */}
              {enviado === 'enviado' && <Alert color="success">¡Mensaje enviado con éxito!</Alert>}
              {/* Mostrar mensaje de reserva */}
              {enviado === 'reservado' && <Alert color="success">¡Vehículo reservado con éxito!</Alert>}
              {/* Mostrar mensaje de error */}
              {enviado === 'error' && <Alert color="danger">¡Hubo un problema al enviar el mensaje!</Alert>}
              {/* Mostrar mensaje de campos incompletos */}
              {enviado === 'incompleto' && <Alert color="warning">Por favor, completa todos los campos requeridos.</Alert>}
              {/* Mostrar mensaje de menor de edad */}
              {enviado === 'menor' && <Alert color="warning">Lo sentimos, solo podrán alquilar vehículos aquellas personas mayores de 18 años, agradecemos su interés y esperamos poder ayudarle pronto.</Alert>}
            </Form>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
