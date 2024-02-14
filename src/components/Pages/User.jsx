/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import imgRegister from "../../components/images/register.png";
import logoSmall from "../../components/images/logo-small.png";
import "./login.css";
import axios from "axios";
import { instance } from "../../api";

function User() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  // Récupérer des données depuis sessionStorage
  let token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await instance.get('userData',{
          headers:{
            "Authorization": `Bearer ${token}`
          },
        });
        console.log('Réponse de la requête:', response.data)
        const userData = response.data;

        setName(userData.name);
        setEmail(userData.email);
        
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error.message);
        setError('Erreur lors de la récupération des données utilisateur');
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:8000/api/update', {
        name: name,
        email: email,
        password: password,
        headers:{
            "Authorization": `Bearer ${token}`
          },
        });

      console.log('Réponse de la requête:', response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      
      setIsUpdated(true);
    } catch (error) {
      if (error.response) {
        console.error('Erreur de la requête:', error.response.data);
        setError(error.response.data.message);
      } else if (error.request) {
        console.error('Pas de réponse de la requête:', error.request);
      } else {
        console.error('Erreur lors de la requête:', error.message);
      }
    }
  };

  if (isUpdated) {
    return <Navigate to="/home-dash"/>;
  }

  return (
    <div className="container my-3" style={{ backgroundColor: "", padding: "2px" }}>
      <Container className="content">
        <Link to="/home-dash">
          <div className="container row">
            <img src={logoSmall} alt="logo" style={{ width:'15%', marginLeft:'550px', margin:'60px auto' }}/>
          </div>
        </Link>
        {error && <p style={{ color: 'red' }} className="text-center"><strong>{error}</strong></p>}
        <Row className="container-2">
          <Col md={6}>
            <Form className="" style={{ marginTop: "75px", marginLeft:'100px' }} onSubmit={handleSubmit}>
              <Form.Group className="" controlId="formBasicName">
                <Form.Control
                  // id="name"
                  name="name"
                  type="text"
                  className=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ border: "none", padding: "13px", width: "70%", marginTop:'95px' }}
                  placeholder="Enter Nom Complet"
                />
              </Form.Group>
                <br />
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control
                  // id="email"
                  name="email"
                  type="email"
                  className=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: "none", padding: "13px", width: "70%" }}
                  placeholder="Enter email"
                />
              </Form.Group>
                <br />
              <Form.Group className="" controlId="formBasicPassword">
                <Form.Control
                  // id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  style={{ border: "none", padding: "13px", width: "70%" }}
                  placeholder="Password"
                />
              </Form.Group>
              
              <Button
                variant=""
                className="text-white"
                style={{ backgroundColor: "#009788", padding: "10px", width: "35%", marginRight: "90px", marginTop: "20px" }}
                type="submit"
              >
                Enrégistrer
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="imgContainer d-flex justify-content-between align-items-end">
                <img src={imgRegister} style={{ width: "110%", height: "430px", objectFit: "cover" }} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default User;
