import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Alert, Label, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

import taller1 from "../assets/all-images/taller1.png";
import taller2 from "../assets/all-images/taller2.png";

import "../styles/contact.css";

const Taller = () => {
  const [taller, setTaller] = useState('');
  const [nuevoTaller, setNuevoTaller] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    surname: '',
    correo_electronico: '',
    matricula: '',
    motivo: 'Revisión',
    informacion: '',
    calendario: ''
  });

  const [enviado, setEnviado] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value

    });
  };

  const agregarTaller = async () => {
    try {
      const response = await fetch("http://localhost:3000/taller/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const addedTaller = await response.json();
  
      console.log("response");
      const newTaller = {
        name: addedTaller.name,
        surname: addedTaller.surname,
        correo_electronico: addedTaller.correo_electronico,
        matricula: addedTaller.matricula,
        motivo: addedTaller.motivo,
        informacion: addedTaller.informacion,
        calendario: addedTaller.calendario
      };
  
      // Actualiza el estado de los talleres con el nuevo taller
      setTaller([...taller, newTaller]);
      setNuevoTaller('');
    } catch (error) {
      console.error('Error añadiendo taller', error);
    }
  };

  //Comprobar si las fechas son válidas 
  const ComprobarCalendario = async (calendario) => {
    try {
      const response = await fetch(`http://localhost:3000/taller/?calendario=${calendario}`);
      const data = await response.json();
  
      // Si la respuesta contiene datos, significa que la fecha está reservada
      if (data && data.data.length > 0) {
        return true; // La fecha está reservada
      } else {
        return false; // La fecha no está reservada
      }
    } catch (error) {
      console.error('Error al comprobar el calendario:', error);
      return true; // Tratamiento por defecto: asumimos que la fecha está reservada para evitar que se envíe el formulario
    }
  };
  
  
// Enviar email 
  const sendEmail = async (e) => {
    e.preventDefault();
  
    try {
      const calendarioReservado = await ComprobarCalendario(formData.calendario);
  
      if (calendarioReservado) {
        console.log('La fecha seleccionada está reservada. No se puede enviar el correo.');
        setEnviado(false);
        return;
      }
  
      // Llama a la función agregarTaller para enviar los datos a la API
      await agregarTaller();
  
      // Enviar datos por correo al administrador
      const data = {
        to: 'aragonesalonso00@gmail.com',
        subject: 'Formulario Taller',
        text: `Nombre: ${formData.name}\nApellidos: ${formData.surname}\nCorreo Electrónico: ${formData.correo_electronico}\nMatrícula: ${formData.matricula}\nMotivo de la cita: ${formData.motivo}\nMás Información: ${formData.informacion}\nReserva: ${formData.calendario}`
      };
      //enlace en el que ejecuta la función
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        console.log('Email enviado con éxito');
        setEnviado(true);
      } else {
        console.error('Error al enviar el email');
        setEnviado(false);
      }
  
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setEnviado(false);
    }
  };
  
  

  return (
    <Helmet title="Taller">
      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <h2 style={{ fontSize: '1.5rem' }}>Taller y Servicio Post-Venta</h2>
              <p style={{ fontSize: '1.1rem' }}>En Automotive, nos comprometemos firmemente con la calidad de nuestro taller y servicio post-venta. Nuestros talleres están dedicados exclusivamente a satisfacer las necesidades de nuestros clientes, manteniendo un control exhaustivo en cada vehículo en términos de mantenimiento, diagnóstico y actualizaciones.</p>
            </Col>
            <Col lg="6" md="6">
              <img src={taller1} alt="Taller y Servicio Post-Venta" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <img src={taller2} alt="Servicios de Calidad en Automotive" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
            </Col>
            <Col lg="6" md="6">
              <h2 style={{ fontSize: '1.5rem' }}>Servicios de Calidad en Automotive</h2>
              <p style={{ fontSize: '1.1rem' }}>En Automotive, nos enorgullecemos de ofrecer servicios de la más alta calidad, donde cada detalle es cuidadosamente atendido para garantizar la satisfacción total de nuestros clientes. Nuestra amplia gama de servicios incluye productos de primeras marcas para asegurar el rendimiento óptimo de tu vehículo.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className="fw-bold mt-5">Formulario de Incidencia</h6>
              <Form onSubmit={sendEmail}>
              <FormGroup>
                <Label for="name">Nombre</Label>
                <Input NAME="name" type="text" value={formData.name} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="surname">Apellidos</Label>
                <Input NAME="surname" type="text" value={formData.surname} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="correo_electronico">Correo Electrónico</Label>
                <Input NAME="correo_electronico" type="email" value={formData.correo_electronico} onChange={handleChange} />
              </FormGroup>
                <FormGroup>
                  <Label for="matricula">Matrícula</Label>
                  <Input NAME="matricula" type="text" value={formData.matricula} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="motivo">Motivo de su cita</Label>
                  <Input type="select" NAME="motivo" value={formData.motivo} onChange={handleChange}>
                    <option value="Revisión">Revisión</option>
                    <option value="Pre ITV">Pre ITV</option>
                    <option value="Avería">Avería</option>
                    <option value="Accidente">Accidente</option>
                    <option value="Otro">Otro</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="informacion">Más Información</Label>
                  <Input type="textarea" NAME="informacion" value={formData.informacion} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="reserva">Calendario</Label>
                  <Input type="datetime-local" NAME="calendario" value={formData.calendario} onChange={handleChange} />
                </FormGroup>
                <Button type="submit" color="primary">
    Enviar
  </Button>
              </Form>
              {enviado !== null && (
              <>
                {enviado === false && <Alert color="danger">La fecha está reservada. Introduzca otra fecha.</Alert>}
                {enviado === true && <Alert color="success">¡El mensaje se ha enviado correctamente!</Alert>}
                {enviado === null && <Alert color="warning">Hubo un problema al enviar el formulario.</Alert>}
              </>
            )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Taller;
