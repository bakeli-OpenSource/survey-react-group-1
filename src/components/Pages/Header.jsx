/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"; // Ajoutez useEffect ici
import axios from "axios";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import "./login.css";
import { instance } from "../../api";


function Header() {
  
  const [isLogout, setIsLogout] = useState(false); // Etat pour gérer la redirection
  const [error, setError] = useState(null);

  // Récupérer des données depuis sessionStorage
  let token = sessionStorage.getItem('token');
  
  const logout = async () => {
    try {
      const response = await axios.delete("http://localhost:8003/api/logout",{
        headers:{
          "Authorization": `Bearer ${token}`
        }, 
      });
      console.log("Réponse de la requête DELETE:", response.data);
      // Mettre à jour l'état pour déclencher la redirection
      setIsLogout(true);
    } catch (error) {
      console.error("Erreur de la requête:", error.message);
      // Gérer les erreurs ici
    }
  };

  if (isLogout) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar
        expand="lg"
        className="header-dash"
        style={{
          backgroundColor: "#fff",
          color: "",
          padding: "20px",
        }}
      >
        <h1 href="#home" style={{
          fontSize:'27px',
          color:'#3F3F46'
        }}>Dashboard</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <NavDropdown title="" id="basic-nav-dropdown"> */}
                {/* <NavDropdown.Item href="/user-profil"> */}
                 <Link to="/user-profil" className="text-decoration-none text-dark"><span>Profil</span></Link> 
                {/* </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="" onClick={logout}> */}
                <Link onClick={logout} className="text-decoration-none text-dark"><span className="px-3">Deconnection</span></Link>
              {/* </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
