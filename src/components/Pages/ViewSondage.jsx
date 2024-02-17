import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

function ViewSondage() {
  const [sondages, setSondages] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const successMessage = queryParams.get('successMessage');
  const [show, setShow] = useState(true);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/survey', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Réponse de la requête:', response.data);
        setSondages(response.data); // Mettre à jour les sondages avec les données récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération des données des sondages:', error.message);
        setError('Erreur lors de la récupération des données des sondages');
        setShow(false);
      }
    };

    fetchData();
  }, [token]); // Déclencher l'effet uniquement lorsque le token change

  const SondageItem = ({ sondage }) => {
    const questions = JSON.parse(sondage.questions); // Décoder les questions JSON
    const questionsList = questions.map((question, index) => (
      <div key={index}>
        <h4>Question {index + 1}: {question.question}</h4>
        <div class="mt-2">
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
      <div className="row">
        <Card className="text-center my-4">
          <Card.Header><Card.Title className="text-success">{sondage?.title}</Card.Title></Card.Header>
          <Card.Body>
            <Card.Text>
            {sondage?.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">{questionsList}</Card.Footer>
        </Card> 
      </div>
    );
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="col overflow-auto">
        <Header />
        <div className="mx-auto my-4 col-lg-8 col-md-10 col-sm-10 flex-wrap" id="content">
          {successMessage && show && (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              <p className="text-center"><strong>{successMessage}</strong></p>
            </Alert>
          )}
          <div className="row text-center">
            <h1>Liste des Sondages</h1>
            {sondages?.data?.map((sondage) => {
            return <SondageItem key={sondage.id} sondage={sondage} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSondage;
