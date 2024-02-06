import {useState} from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav"
import { Link,Navigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import imgLogin from "../../components/images/login.png";
import logoSmall from "../../components/images/logo-small.png";
import './login.css'

const Login = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const successMessage = queryParams.get('successMessage');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  // const [successSms, setSuccessSms] = useState(null);
  const [isLogged, setIsLogged] = useState(false); // Etat pour gérer la redirection
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: email,
        password: password
      });

      // Traitez la réponse en cas de succès
      console.log('Réponse de la requête POST:', response.data);
      // setSuccessSms('Connexion réussie !');
      // Effacez les éventuels messages d'erreur précédents
      setError(null);
      // Effacez les champs du formulaire après une inscription réussie
      setEmail('');
      setPassword('');
      setIsLogged(true);
      // setSuccessSms('Connexion réussie !');
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
        // setSuccessSms(null);
      } else {
        // Autres erreurs
        console.error('Erreur lors de la requête:', error.message);
      }
    }
  };
  if (isLogged) {
    return <Navigate to="/home-dash"/>;
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
        {error && <p style={{ color: 'red' }} className="text-center"><strong>{error}</strong></p>} {/* Affichez l'erreur si elle existe */}
        {successMessage && <p style={{ color: 'green'}} className="text-center"><strong>{successMessage}</strong></p>}
        {/* {successSms && <p style={{ color: 'green'}} className="text-center"><strong>{successSms}</strong></p>} */}
        <Row className="container-2">
        <Col md={6}>
            <div className="head_right">
                <img
                  src={imgLogin}
                  style={{ width: "110%", height: "430px", objectFit: "cover" }}
                  alt=""
                  className="img-fluid d-md-flex d-sm-none"
                />
            </div>
          </Col>
          <Col md={6} className="">
            <Form className="" style={{marginTop:'95px'}} onSubmit={handleSubmit}>
                {/* <h2 className="">Se connecter</h2> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email"
                  // id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 className="" 
                 style={{
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
                <Form.Control type="password" 
                // id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
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
         Vous n'avez pas encore de compte <Nav.Link className="fw-bold" href="register" style={{
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
