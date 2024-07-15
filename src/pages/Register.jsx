import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const auth = getAuth(appFirebase);

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Actualizar el nombre del usuario
      await updateProfile(userCredential.user, {
        displayName: name
      });
      // Limpiar los campos de entrada
      setName("");
      setEmail("");
      setPassword("");
      // Puedes redirigir al usuario a otra página o realizar otras acciones necesarias después del registro exitoso
      console.log("Usuario registrado:", userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Registro de Usuario</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre completo:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">
          Registrarse
        </button>
        {error && <p className="error-message">{error}</p>}
        <Link to="/login" className="login-link">
          ¿Ya tienes una cuenta? Inicia sesión aquí.
        </Link>
      </form>
    </div>
  );
};

export default Register;
