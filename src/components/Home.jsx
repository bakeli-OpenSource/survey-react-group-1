/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import logo from "../components/images/logo.png" 
import imgContainer from "../components/images/imgContner.png"  
import { Col, Container, Row } from "react-bootstrap"; 
import './Home.css'
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

export default function Home()
 {
  return (
    <div className="container">
      <Navbar expand='lg' className="" style={{marginTop:"-80px"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{width:"70%", objectFit:'cover'}}/>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {/* <Nav className="me-auto">
              <Nav.Link href="/" className="fw-bold">Home</Nav.Link>
              <Nav.Link href="about" className="fw-bold">About</Nav.Link>
            </Nav> */}
            <Navbar.Text>
              <a href="login" style={{
                textDecoration:'none',
                color:'#2F2E40',
                
              }}><h6> Se connecter<CiLogin /> </h6></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
          <Row>
            <Col md={6}>
              <div className="head_left" style={{marginTop:'100px'}}>
                {/* <span className="h_subTitle">Plateforme de Sondage</span> */}
                <div className="w-100 h_title border-0" >
                  <h1 className="" style={{color:'#2F2E40'}}>Donnez vie à vos</h1>
                  <h1 style={{color:'#2F2E40'}}>Idées grâce à nos</h1>
                  <h1 style={{color: '#009788'}} >Sondages interactifs.</h1>
                </div>
                <div className="d-flex align-items-start">
                  
                  <Link to="login"><Button style={{background:'#FF9700'}} className="border-0 mt-3 px-4 py-3 rounded">Créer votre sondage</Button></Link>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="head_right">
                  <img src={imgContainer} style={{width:'110%', height:'430px',objectFit:'cover'}} alt="" className="img-fluid d-md-flex d-sm-none" />
              </div>
            </Col>
          </Row>
      </Container>

    </div>
  );
}
