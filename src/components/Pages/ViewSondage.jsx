/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function ViewSondage() {
  return (
    <div className="d-flex">
            <div className="w-auto">

                <Sidebar />
            </div>
            <div className="col overflow-auto">
            <Header />
               <div>
                <h2>Voir Sondage</h2>
               </div>
            </div>
      </div>
  )
}

export default ViewSondage