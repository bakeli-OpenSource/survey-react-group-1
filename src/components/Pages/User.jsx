/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Card from "react-bootstrap/Card";
import photoUser from "../../components/images/photo profil.jpeg";


function User() {
  return (
    <div className="d-flex">
    <div className="w-auto">

        <Sidebar />
    </div>
    <div className="col overflow-auto">
    <Header />
       <div>
       <Card
                  border=""
                  style={{ width: "22rem" }}
                  className="me-5 card"
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                    <h6>Souleymane BARRO</h6>
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                        <div className="d-flex w-100">
                        <img src={photoUser} alt="" className='w-50'/>
                       
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
       </div>
    </div>
</div>
  )
}

export default User