
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar"
import logo from "../../components/images/logo.png"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import imgLogin from "../../components/images/login.png";
import logoSmall from "../../components/images/logo-small.png";
import './login.css'
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const [emailExists, setEmailExists] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
  }


  return (
    <div className="container my-3" style={{backgroundColor:''}}>
     
      <Container className="content">
      <Link to="/">
        <div className="container row" style={{
          }}>
      
       <img  src={logoSmall} alt="logo" style={{
            width:'15%',
            marginLeft:'550px',
            margin:'70px auto',
        }}/>
          </div>
          </Link>
        <Row className="container-2">
        <Col md={6}>
            <div className="head_right">
              <div className="imgContainer d-flex justify-content-between align-items-end">
                <img
                  src={imgLogin}
                  style={{ width: "110%", height: "430px", objectFit: "cover" }}
                  alt=""
                  className=""
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="">
            <Form className="" style={{marginTop:'95px'}} >
                {/* <h2 className="">Se connecter</h2> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" className="" style={{
                    border:'none',
                    padding:'12px',
                    width:'70%',
                    borderBottom:'2px solid white'
                }} placeholder= "Enter email" /> <br />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" style={{
                    border:'none',
                    padding:'12px',
                    width:'70%',
                    borderBottom:'1px solid white',
                 }} placeholder="Password" /> <br />
              </Form.Group>
              <Form.Text className="text-muted">
         <p className="mt-3" style={{
          textAlign:'left',
          color:'#000'
         }}>
         Vous n\avez pas encore de compte <Nav.Link className="fw-bold" href="register" style={{
          textDecoration:'none',
          color:'#009788',
         }}> inscrivez vous</Nav.Link>
         </p>
        </Form.Text>
              <Button variant="" className="text-white mt-3" style={{
                backgroundColor:'#009788',
                padding:'9px',
                width:'32%',
                marginRight:'90px'
              }} type="submit">
                Se Connecter
              </Button>
            </Form>
          </Col>
     
        </Row>
      </Container>
    </div>
  );
};

export default Login;
