import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import imgRegister from "../../components/images/register.png";
import './login.css'

const Register = () => {
    return (
        <div>
            <div className="container my-3" style={{backgroundColor:'#009788'}}>
      <Container>
        <Row>
        <Col md={6}>
            <div className="head_right">
              <div className="imgContainer d-flex justify-content-between align-items-end">
                <img
                  src={imgRegister}
                  style={{ width: "110%", height: "430px", objectFit: "cover" }}
                  alt=""
                  className=""
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="">
            <Form className="" style={{marginTop:'95px'}} >
                <h1 className="text-white">Inscrivez vous</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="text" className="" style={{
                    border:'none',
                    padding:'15px',
                    width:'70%',
                    backgroundColor:'#009788',
                    
                    borderBottom:'2px solid white'
                }} placeholder= "Enter nom" />

<Form.Control type="text" className="" style={{
                    border:'none',
                    padding:'15px',
                    width:'70%',
                    backgroundColor:'#009788',
                    
                    borderBottom:'2px solid white'
                }} placeholder= "Prenom" />


<Form.Control type="email" className="" style={{
                    border:'none',
                    padding:'15px',
                    width:'70%',
                    backgroundColor:'#009788',
                    
                    borderBottom:'2px solid white'
                }} placeholder= "Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" style={{
                    border:'none',
                    padding:'15px',
                    width:'70%',
                    backgroundColor:'#009788',
                    borderBottom:'1px solid white',
                 }} placeholder="Password" />
              </Form.Group>
              <Form.Text className="text-muted">
         <p className="mt-3" style={{
          textAlign:'left',
          color:'#fff'
         }}>
         {/* Vous n'avez pas encore de compte <Link to="sign-in">Inscrivez vous</Link> */}
         <Nav.Link href="login" className="fw-bold">Connectez</Nav.Link>
         </p>
        </Form.Text>
              <Button variant="" className="text-white" style={{
                backgroundColor:'#FF9700',
                padding:'10px',
                width:'35%',
                marginRight:'90px'
              }} type="submit">
                INSCRIRE
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
        </div>
    );
};

export default Register;