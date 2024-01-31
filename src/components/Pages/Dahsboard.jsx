/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import HomeDash from './HomeDash';
import Sondage from './Sondage';




function Dahsboard() {
  return (
    <div>
        <div className="d-flex">
            <div className="w-auto"> 
            <Sidebar />
            </div>
            <div className="col overflow-auto">
                
            </div>
        </div>
    </div>
 
  )
}

export default Dahsboard