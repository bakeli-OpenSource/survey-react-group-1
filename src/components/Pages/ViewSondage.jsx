import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import {
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function ViewSondage() {
  const [sondage, setSondage] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const successMessage = queryParams.get('successMessage');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const shareUrl = 'http://localhost:5173/participant/share';
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://localhost:8000/api/survey', {
          const response = await instance.get("survey",{
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Réponse de la requête:', response.data);
        const sondages = response.data.data;
        if (sondages.length > 0) {
          const latestSondage = sondages[0]; // Prendre le premier sondage (le plus récent)
          setSondage(latestSondage);
          sessionStorage.setItem('id', latestSondage?.id);
        } else {
          setError('Aucun sondage trouvé.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données des sondages:', error.message);
        setError('Erreur lors de la récupération des données des sondages');
        setShow(false);
      }
    };

    fetchData();
  }, [token]); // Déclencher l'effet uniquement lorsque le token change

  const SondageItem = ({ sondage }) => {
    if (!sondage) return null; // Retourner null si aucun sondage n'est disponible

    const questions = JSON.parse(sondage.questions); // Décoder les questions JSON
    const questionsList = questions.map((question, index) => (
      <div key={index} className='my-4'>
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
          <Button variant="success"
            className="p-2 mb-2 mx-auto"
            onClick={handleShow}
            style={{
              width: "35%",
            }}
          >
            <strong>Partager Votre sondage</strong>
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Cliquez sur un bouton!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={50} round={true} className="mx-3" />
              </EmailShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={50} round={true} />
              </WhatsappShareButton>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
            <SondageItem sondage={sondage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewSondage;
