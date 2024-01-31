/* eslint-disable no-unused-vars */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Pages/About';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Dahsboard from './components/Pages/Dahsboard';
import Sondage from './components/Pages/Sondage';
import Resultats from './components/Pages/Resultats';
import HomeDash from './components/Pages/HomeDash';
import Chart from 'chart.js/auto';






const App = () => {
    return (
        
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="about" element={<About />}/>
                        <Route path="login" element={<Login />}/>
                        <Route path="register" element={<Register />}/>
                        
                    </Routes>

            </BrowserRouter>
        
    );
};

export default App;

