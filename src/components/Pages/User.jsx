/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function User() {
  return (
    <div className="d-flex">
    <div className="w-auto">

        <Sidebar />
    </div>
    <div className="col overflow-auto">
    <Header />
       <div>
        <h2>User Profil</h2>
       </div>
    </div>
</div>
  )
}

export default User