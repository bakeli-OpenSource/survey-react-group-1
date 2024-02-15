/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ViewSondage() {
    
  const [sondages, setSondages] = useState([]);
  const [error, setError] = useState('');
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8003/api/survey', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Réponse de la requête:', response.data);
        setSondages(response.data); // Mettre à jour les sondages avec les données récupérées
        console.log(sondages)
      } catch (error) {
        console.error('Erreur lors de la récupération des données des sondages:', error.message);
        setError('Erreur lors de la récupération des données des sondages');
      }
    };

    fetchData();
  }, [token]); // Déclencher l'effet uniquement lorsque le token change

  const SondageItem = ({ sondage }) => {
    const questions = JSON.parse(sondage.questions); // Décoder les questions JSON
    const questionsList = questions.map((question, index) => (
      <div key={index}>
        <h4>Question {index + 1}: {question.question}</h4>
        <div className="mt-2">
          <select>
            <option>Sélectionner une réponse</option>
            {question.responses.map((response, idx) => (
              <option key={idx}>{response}</option>
            ))}
          </select>
        </div>
      </div>
    ));
    return (
        <div className="">
            <Form className="" style={{ 
                marginTop: "75px",
                marginLeft:'100px'
                }}
                onSubmit={handleSubmit}>
                <Form.Group className="" >
                  
                  <Form.Control
                    type="text"
                    className=""
                    id=''
                    value={{sondage?.title}}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                      marginTop:'95px'
                    }}
                    
                  />  <br/>
                 
                  <Form.Control
                    
                    className=""
                    id='email'
                    value={sondage?.description}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                    }}
                  
                  />
                </Form.Group> <br />

                  <Form.Control
                    // name="password"
                    type="password"
                    id=''
                    value={questionsList}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      border: "none",
                      padding: "13px",
                      width: "70%",
                    }}
                    placeholder="Password"
                  />
                
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
                    ENVOYER
                  </Button>
            
              </Form>
        </div>
      
    );
  };
  
  
}

export default ViewSondage;
