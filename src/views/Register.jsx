import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth"
import { Menu } from './Menu';
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKX2_VYqP9fiElOeprBGzanOhXNb2d0c8",
  authDomain: "galnet-1bf24.firebaseapp.com",
  projectId: "galnet-1bf24",
  storageBucket: "galnet-1bf24.firebasestorage.app",
  messagingSenderId: "4044195884",
  appId: "1:4044195884:web:e5a400dc7e730779b56989",
  measurementId: "G-Q2EZ4PCFYT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Actualizar el `displayName` con el nombre completo
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/login'); // Redirige al login tras el registro
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Error al registrar usuario.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Mostrar mensaje de bienvenida
      alert(`Bienvenido, ${user.displayName}!`);
      navigate('/'); // Redirige a la página principal
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      alert('Error al iniciar sesión con Google.');
    }
  };

  return (
    <div className="container mt-5">
      <Menu/>
    <br/>      
    <h1 className="text-primary">Drip Coffee  < img src='./taza-de-cafe.png'  alt="Icono" /> </h1>
      <h2 className="text-center mb-4">Registro</h2>
      <form className="p-4 shadow rounded bg-light" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Ingrese el apellido"
          />
        </div>
        <div className="mb-3">
        <label htmlFor="dni" className="form-label">Documento</label>
        <input
          type="text" // Cambiado a texto para mayor control
          className="form-control"
          id="dni"
          name="dni"
          value={formData.dni}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) { // Solo permite números
              handleChange(e); // Actualiza el estado si el valor es válido
            }
          }}
          required
          maxLength="15" // Define la longitud máxima del DNI
          placeholder="Ingrese solo números"
        />
      </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
             placeholder="Ingrese su correo electronico"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Ingrese su correo su contraseña"
          />
        </div>

     
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Registrarse
        </button>
      </form>

      <hr />
      <div className="text-center">
        <button
          className="btn btn-danger w-100"
          onClick={handleGoogleSignIn}
        >
          Registrarse con su cuenta Google
        </button>
      </div>
    </div>
  );
};



export { Register }