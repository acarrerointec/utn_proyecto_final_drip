import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Menu } from './Menu';
import { Whatsapp } from './Whatsapp';


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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Tienda = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const fetchedProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(fetchedProducts.slice(0, 4)); // Mostrar solo los primeros 4 productos
    };

    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
  <Menu />
  <br />
  <h1 className="text-center text-primary">
    Drip Coffee <img src="./cafe.png" alt="Icono" />
  </h1>
  <h2 className="text-center mb-4">Menú</h2>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {products.map((product) => (
      <div className="col" key={product.id}>
        <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top text-center"
          alt={product.name}
          style={{
            width: '1000%',  
            height: '1000%',      // Ancho completo
            borderRadius: '1px', // Bordes redondeados
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Sombra alrededor de la imagen
          }}
        />

          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="text-muted">Precio: ${product.price}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  <br/>
  <h2 className="text-center mb-4">Realizar pedidos mendiante
  <Whatsapp/>
  </h2>
  

</div>



      
    
  );
};

export  {Tienda}
