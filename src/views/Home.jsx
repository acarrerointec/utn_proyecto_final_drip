import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"

import { Maps } from "./Maps.jsx"
import './Home.css'
import { Menu } from "./Menu.jsx"
import { Whatsapp } from "./Whatsapp.jsx"

import { getAuth } from "firebase/auth";

const Home = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);


    return (

      <main>
         <Menu/>
      

        <div className="container mt-5">
        <h1 className="text-primary text-center">Drip Coffee< img src='./cafe.png'  alt="Icono" /> </h1>
      {user ? (
        <h4 className="text-center text-secondary">Hola, {user.displayName || "Usuario"} </h4>
      ) : (
        <h2 className="text-center text-secondary"><a class="btn btn-outline-dark" href="./Login" role="button">Inica sesión</a> </h2>
      )}

    </div>
      

        

        <div class="card">
            <div class="card-body">
              <h5 class="card-title">Drip Rewards</h5>
              <h4 class="card-text">Empezá a obtener beneficios </h4>
              <p>Cafeteria de especialidad granos seleccionados especialmente con notas de chocolate, caramelo, miel y narajana</p>
             
              <a href="./Tarjeta" class="btn btn-primary">Leer más</a>

            </div>

        </div>
       

      < Maps/>
      <div className="registro">
      < Whatsapp/>
        <a class="btn btn-outline-dark" href="./registro" role="button">Registro</a>

      </div>

     
       
      
  </main>
      
      
    )
}

export { Home }

