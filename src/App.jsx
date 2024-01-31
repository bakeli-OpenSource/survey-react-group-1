import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Pages/About';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Sondage from './components/Pages/Sondage';
import CreateSondage from './components/Pages/CreateSondage';


const App = () => {
    return (
        
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="about" element={<About />}/>
                        <Route path="login" element={<Login />}/>
                        <Route path="register" element={<Register />}/>
                        <Route path="/sondage" element={<Sondage />}/>
                        <Route path="/createsondage" element={<CreateSondage />}/>
                    </Routes>

            </BrowserRouter>
        
    );
};

export default App;

