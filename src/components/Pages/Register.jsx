import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { Col, Container, Row, Toast } from "react-bootstrap";
import imgRegister from "../../components/images/register.png";
import logo from "../../components/images/logo.png";
import logoSmall from "../../components/images/logo-small.png";
import "./login.css";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Register = () => { 
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
    


    try{
      const response = await axios.post("http://127.0.0.1:8003/api/register", formData)
      if( axios.get(`http://127.0.0.1:8003/api/register?user_email=${formData.email}`)){
        axios.post("http://127.0.0.1:8003/api/register", formData)
        console.log(response.data);
        toast.success("Inscription réussie");
        navigate("/login");
      }else{
        toast.error("email deja pris");
        
      }
    }
    finally{(() => setLoading(false));}
    
         
  };

  return (
    <div className="container my-3"
        style={{ backgroundColor: "", padding: "2px" }}>
          
      <Container className="content">
        <Toaster/>
        <Link to="/">
          <div className="container row" style={{}}>
      
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
              <Form.Group className="" >
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control controlId="formBasicName"
                  type="text" className="" name="name" value={formData.name}
                  required  onChange={handleChange}
                  style={{
                    border: "none",
                    padding: "13px",
                    width: "70%",
                    marginTop:'95px'
                  }}
                  placeholder="Enter Nom Complet"/>  <br />
                
                <Form.Control controlId="formBasicEmail"
                  type="email"
                  className=""
                  style={{
                    border: "none",
                    padding: "13px",
                    width: "70%",
                  }}
                  placeholder="Enter email" name="email" value={formData.email}
                  required onChange={handleChange}
                />
              </Form.Group> <br />

                  <Form.Control
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
                  INSCRIRE
                </Button>
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
