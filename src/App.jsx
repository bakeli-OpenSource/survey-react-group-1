import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Pages/About';
import Login from './components/Pages/Login';

const App = () => {
    return (
        
            <BrowserRouter>
            <main>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="about" element={<About />}/>
                        <Route path="login" element={<Login />}/>
                    </Routes>
            </main>
            </BrowserRouter>
        
    );
};

export default App;