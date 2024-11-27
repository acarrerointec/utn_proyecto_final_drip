import { Menu } from "./Menu";
import {Maps} from "./Maps"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Whatsapp } from "./Whatsapp";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react"

const Tarjeta = () => {


    
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
    return (
        <>
          <Menu/>
      
   <div className="container center mt-5">
        <h1 className="text-primary text-center ">Drip Coffee< img src='./cafe.png'  alt="Icono" /> </h1>
      {user ? (
        <h4 className="text-center text-secondary">Hola, {user.displayName || "Usuario"} </h4>
      ) : (
        <h2 className="text-center text-secondary">Tarjeta digital de beneficios</h2>
      )}

    </div>


<h4 className="text-secondary">En desarrollo</h4>

<div className="card">
      <div className="card-header" >< img src='./colombia.png'  alt="Icono" /> </div>
      <div className="card-body">
        <h5 className="card-title">Granos arábicos</h5>
     
        <p className="card-text">
          Altura: 1800 - 2100msnm 
         
        </p>
        <p className="card-text">
        Notas en taza: chocolate, caramelo, miel, naranja.
         
        </p>
        
        <div>
        <h5 className="card-text">Aroma</h5>
        <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        
        <div className="progress-bar" style={{ width: '35%' }}></div>
      </div>
      <br/>
        <h5 className="card-text">Acidez</h5>
      
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        
        <div className="progress-bar" style={{ width: '45%' }}></div>
      </div>
      <br/>
      <h5 className="text">Cuerpo</h5>
     
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar" style={{ width: '50%' }}></div>
      </div>
    </div>
      </div>
    </div>

        <Maps/>
        <Whatsapp/>
        </>
    );
}

export { Tarjeta };
