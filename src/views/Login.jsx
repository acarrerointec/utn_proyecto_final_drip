import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Menu } from "./Menu";


// Configuración de Firebase
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

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Inicia sesión con email y contraseña
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert(`Bienvenido ${user.displayName || "Usuario"}`);
      navigate("/"); // Redirige a la página principal
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  // Inicia sesión con Google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      alert(`Bienvenido ${user.displayName || "Usuario"}`);
      navigate("/"); // Redirige a la página principal
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      alert("Error al iniciar sesión con Google.");
    }
  };

  return (
    <div className="container mt-5">
      <Menu/>
      <br/>
      <h1 className="text-primary">Drip Coffee  < img src='./cafe.png'  alt="Icono" /> </h1>
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <form className="p-4 shadow rounded bg-light" onSubmit={handleSubmit}>
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
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Iniciar Sesión
        </button>
      </form>
      <hr />
      <div className="text-center mt-3">
        <button className="btn btn-danger w-100" onClick={handleGoogleSignIn}>
          Continuar con Google
        </button>
      </div>
    </div>
  );
};

export  {Login}