/* eslint-disable no-unused-vars */
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

import { Link, Navigate } from "react-router-dom";
import { Col, Container, Row, Toast } from "react-bootstrap";
import imgRegister from "../../components/images/register.png";
// import logo from "../../components/images/logo.png";
import logoSmall from "../../components/images/logo-small.png";
import "./login.css";
import axios from "axios";
import { instance } from "../../api";
// import toast, { Toaster } from 'react-hot-toast';
// import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false); // Etat pour gérer la redirection
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        name: name,
        email: email,
        password: password
      });

      // Traitez la réponse en cas de succès
      console.log('Réponse de la requête POST:', response.data);
      setSuccessMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.');
      // Effacez les éventuels messages d'erreur précédents
      setError(null);
      // Effacez les champs du formulaire après une inscription réussie
      setName('');
      setEmail('');
      setPassword('');
      setIsRegistered(true);
      setSuccessMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.');
      // navigate("/login")
    } catch (error) {
      if (error.response) {
        // Si la réponse est reçue mais avec un statut d'erreur
        console.error('Erreur de la requête:', error.response.data);
        setError(error.response.data.message); // Enregistrez le message d'erreur dans l'état
        // Effacez les éventuels messages de succès précédents
      } else if (error.request) {
        // Si la requête est faite mais aucune réponse n'est reçue
        console.error('Pas de réponse de la requête:', error.request);
        setSuccessMessage(null);
      } else {
        // Autres erreurs
        console.error('Erreur lors de la requête:', error.message);
      }
    }
  };
  if (isRegistered) {
    return <Navigate to="/login?successMessage=Inscription%20réussie%20!%20Vous%20pouvez%20maintenant%20vous%20connecter"/>;
  }
  return (
    <div className="container my-3"
        style={{ backgroundColor: "", padding: "2px" }}>
          
      <Container className="content">
        <Link to="/">
          <div className="container row" style={{}}>
      
            <img  src={logoSmall} alt="logo" style={{
              width:'15%',
              marginLeft:'550px',
              margin:'60px auto',
            }}/>
          </div>
        </Link>
        {error && <p style={{ color: 'red' }} className="text-center"><strong>{error}</strong></p>} {/* Affichez l'erreur si elle existe */}
          <Row className="container-2">
            <Col md={6}>
              <Form className="" style={{ 
                marginTop: "75px",
                marginLeft:'100px'
                }}
                onSubmit={handleSubmit}>
                <Form.Group className="" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="text"
                    className=""
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                      marginTop:'95px'
                    }}
                    placeholder="Enter Nom Complet"
                  />  <br />
                 
                  <Form.Control
                    type="email"
                    className=""
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                    }}
                    placeholder="Enter email"
                  />
                </Form.Group> <br />

                  <Form.Control
                    // name="password"
                    type="password"
                    id='name'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
}

export default Register;
