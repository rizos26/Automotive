import React, { useEffect, useState } from "react";
import { getAuth, updatePassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import appFirebase from "../credenciales";

const Perfil = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [cars, setCars] = useState([]);
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(appFirebase);
    const firestore = getFirestore(appFirebase);

    const currentUser = auth.currentUser;
    setUser(currentUser);
    setEmail(currentUser.email);

    const userRef = doc(firestore, "users", currentUser.uid);
    getDoc(userRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setCars(userData.cars || []);
        } else {
          console.log("No se encontraron datos del usuario");
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario:", error);
      });
  }, []);

  const handlePasswordChange = () => {
    const auth = getAuth(appFirebase);
    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        console.log("Contraseña cambiada exitosamente");
        // Limpiar el campo de nueva contraseña después de cambiarla
        setNewPassword("");
      })
      .catch((error) => {
        console.error("Error al cambiar la contraseña:", error);
      });
  };

  const handleSignOut = () => {
    const auth = getAuth(appFirebase);
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada exitosamente");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: 'red', marginBottom: '20px' }}>Perfil de Usuario</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Correo Electrónico:</label>
        <span style={{ display: 'block', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>{email}</span>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Nueva Contraseña:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginBottom: '10px' }}
        />
        <button 
          onClick={handlePasswordChange} 
          style={{ backgroundColor: 'rgb(5, 10,42)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Cambiar Contraseña
        </button>
      </div>
      <div>
        <button 
          onClick={handleSignOut} 
          style={{ backgroundColor: 'rgb(5, 10, 42)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}  
  
export default Perfil;