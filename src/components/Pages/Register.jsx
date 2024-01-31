import React from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import imgRegister from "../../components/images/register.png";
import logo from "../../components/images/logo.png";
import logoSmall from "../../components/images/logo-small.png";
import "./login.css";

const Register = () => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = {
  //       name: e.target.elements.name.value,
  //       email: e.target.elements.email.value,
  //       password: e.target.elements.password.value
  //     };
  
  //     const response = await axios.post('http://127.0.0.1:8000/api/inscription', formData);
  //     console.log('Inscription réussie:', response.data);
  //     // Gérer la réponse de l'API ici
  //   } catch (error) {
  //     console.error('Veuillez revoir les informations saisies :', error);
  //     // Gérer les erreurs ici
  //   }
  // };
  
  return (
    <div className="container my-3"
        style={{ backgroundColor: "", padding: "2px" }}>
          
        <Container className="content">
        <Link to="/">
        <div className="container row" style={{
          }}>
      
       <img  src={logoSmall} alt="logo" style={{
            width:'15%',
            marginLeft:'550px',
            margin:'60px auto',
        }}/>
          </div>
          </Link>
          <Row className="container-2">
            <Col md={6}>
              
              <Form className="" onSubmit={handleSubmit} style={{ 
                marginTop: "75px",
                marginLeft:'100px'
                }}>
                <Form.Group className="" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    name="name"
                    type="text"
                    className=""
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                      marginTop:'95px'
                    }}
                    placeholder="Enter Nom Complet"
                  />  <br />
                 
                  <Form.Control
                    name="email"
                    type="email"
                    className=""
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                    }}
                    placeholder="Enter email"
                  />
                </Form.Group> <br />

                  <Form.Control
                    name="password"
                    type="password"
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                    }}
                    placeholder="Password"
                  />
                <Form.Text className="text-muted">
                  <p
                    className="mt-3"
                    style={{
                      textAlign: "left",
                      color: "#000",
                    }}
                  >
                    Vous avez déja un compte  <a href="login" className="fw-bold"
                    style={{
                      textDecoration:'none',
                      color:'#009788',
                    }}> identifiez vous </a>
                  </p>
                </Form.Text>
                {/* <Link to="sondage"> */}
                  <Button
                    variant=""
                    className="text-white"
                    style={{
                      backgroundColor: "#009788",
                      padding: "10px",
                      width: "35%",
                      marginRight: "90px",
                    }}
                    type="submit"
                    >
                    S'INSCRIRE
                  </Button>
                {/* </Link> */}
              </Form>
            </Col>
            <Col md={6}>
              <div className="head_right">
                <div className="imgContainer d-flex justify-content-between align-items-end">
                  <img
                    src={imgRegister}
                    style={{
                      width: "110%",
                      height: "430px",
                      objectFit: "cover",
                    }}
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </Col>
            
          </Row>
          
        </Container>
      </div>
  );
};

export default Register;
