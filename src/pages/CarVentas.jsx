import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import FindCarFormHome from "../components/UI/FindCarFormHome";

const CarVentas = () => {
  const [filtroPrecio, setFiltroPrecio] = useState(""); // Estado para almacenar el filtro de precio seleccionado

  const handleFiltroChange = (event) => {
    setFiltroPrecio(event.target.value); // Actualizar el estado con la opción seleccionada
  };

  // Función para filtrar los coches por precio
  const filtrarCochesPorPrecio = (coches) => {
    if (filtroPrecio === "low") {
      return coches.sort((a, b) => parseFloat(a.Precio) - parseFloat(b.Precio)); // Ordenar de menor a mayor precio
    } else if (filtroPrecio === "high") {
      return coches.sort((a, b) => parseFloat(b.Precio) - parseFloat(a.Precio)); // Ordenar de mayor a menor precio
    } else {
      return coches; // No aplicar ningún filtro si no se selecciona ninguna opción
    }
  };

  // Filtrar los coches que tengan Rent: false
  const filteredCars = carData.filter((car) => car.Rent === false);

  return (
    <Helmet title="ventas">
      <Container>
        <Row className="form__row">
          <Col lg="8" md="8" sm="12">
            <FindCarFormHome />
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
                  <option value="">ordenar por</option>
                  <option value="low">precio ascendente</option>
                  <option value="high">precio descendente</option>
                </select>
              </div>
            </Col>

            {/* Mapear los coches filtrados y mostrarlos usando CarItem */}
            {filtrarCochesPorPrecio(filteredCars).map((car) => (
              <CarItem item={car} key={car.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarVentas;
