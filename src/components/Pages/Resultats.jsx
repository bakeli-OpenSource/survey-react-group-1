/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Resultats() {
  return (
    <div className="d-flex">
    
        <Sidebar />
    
    <div className="col overflow-auto">
    <Header />
       <div>
        <h1>Resultats</h1>
       </div>
    </div>
</div>
  )
}

export default Resultats