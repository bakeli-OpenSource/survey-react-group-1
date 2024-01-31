/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import HomeDash from './HomeDash';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Sondage() {
  return (
    <div className="d-flex">
            <div className="w-auto">

                <Sidebar />
            </div>
            <div className="col overflow-auto">
            <Header />
               <div>
                {/* Code */}
               </div>
            </div>
      </div>
    
  )
}

export default Sondage