import React, { useState, useEffect } from "react";
import carData from "../../assets/data/carData";
import CarItem from "./CarItem";
import { Form, FormGroup } from "reactstrap";
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [prices, setPrices] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false); // Estado para rastrear si se ha hecho clic en buscar

  useEffect(() => {
    // Filtrar marcas de coches cuyo atributo Rent sea igual a true
    const uniqueBrands = [...new Set(carData.filter(car => car.Rent).map((car) => car.Modelo))];
    setBrands(uniqueBrands);
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      const filteredModels = carData.filter((car) => car.Modelo === selectedBrand);
      const uniqueModels = [...new Set(filteredModels.map((car) => car.Especificaciones))];
      setModels(uniqueModels);
    } else {
      setModels([]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      const filteredPrices = carData.filter((car) => car.Modelo === selectedBrand && car.Especificaciones === selectedModel).map((car) => car.Precio);
      setPrices(filteredPrices);
    } else {
      setPrices([]);
    }
  }, [selectedBrand, selectedModel]);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedModel(""); // Reiniciar modelo seleccionado
    setSelectedPrice(""); // Reiniciar precio seleccionado
    setFilteredCars([]); // Limpiar resultados de búsqueda al cambiar de marca
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
    setSelectedPrice(""); // Reiniciar precio seleccionado
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Evitar el envío del formulario
    // Al hacer clic en Buscar, se activa la visualización de los resultados
    setSearchClicked(true);
    // Realizar la búsqueda
    const filtered = carData.filter((car) =>
      car.Modelo === selectedBrand &&
      car.Especificaciones === selectedModel &&
      parseInt(car.Precio) <= parseInt(selectedPrice)
    );
    setFilteredCars(filtered);
  };

  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="select__group">
          <select value={selectedBrand} onChange={handleBrandChange}>
            <option value="">Seleccionar Marca</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select value={selectedModel} onChange={handleModelChange} disabled={!selectedBrand}>
            <option value="">Seleccionar Modelo</option>
            {models.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select value={selectedPrice} onChange={handlePriceChange} disabled={!selectedModel}>
            <option value="">Seleccionar Precio</option>
            {prices.map((price) => (
              <option key={price} value={price}>{price}</option>
            ))}
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <button className="btn find__car-btn" onClick={handleSearch} disabled={!selectedPrice}>
            Buscar
          </button>
        </FormGroup>
      </div>

      <div className="cars">
        {searchClicked &&
          filteredCars.map((car) => (
            <CarItem key={car.id} item={car} />
          ))}
      </div>
    </Form>
  );
};

export default FindCarForm;
