import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Dashboard} from "../views/Dashboard.jsx"
import {Home} from "../views/Home.jsx"
import {Tienda} from "../views/Tienda.jsx"
import {Login} from "../views/Login.jsx"
import {Register} from "../views/Register.jsx"
import { Tarjeta } from '../views/Tarjeta.jsx';

 
const AppRouter = () => {
    
return(

<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/dashboard" element={<Dashboard/>} /> 
            <Route path="/menu" element={<Tienda/>} /> 
            <Route path="/registro" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/tarjeta" element={<Tarjeta/>} />
    

        </Routes>
    </BrowserRouter>
)
    
}

export {AppRouter}
