import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link, Navigate } from "react-router-dom";


function Share() {
  const [sondage, setSondage] = useState(null);
const [error, setError] = useState('');
const [reponses, setReponses] = useState({});
const [name, setName] = useState('');
const token = sessionStorage.getItem('token');
const id = sessionStorage.getItem('id');


  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`http://localhost:8000/api/survey`, {
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
          sessionStorage.setItem('id', latestSondage?.id);}
      } catch (error) {
        console.error('Erreur lors de la récupération des données des sondages:', error.message);
        setError('Erreur lors de la récupération des données des sondages');
      }
      };

    fetchData();
    }, [token]); // Déclencher l'effet uniquement lorsque le token change

    // const handleResponseChange = (questionIndex, response) => {
    //   setReponses(prevState => ({
    //     ...prevState,
    //     [questionIndex]: response
    //   }));
    // };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        // const response = await axios.post('http://localhost:8000/api/responses', {
          const response = await instance.post("responses",{
          name: name,
          responses: reponses
        });
        console.log('Réponses des utilisateurs envoyées avec succès:', response.data);
        setName('');
      } catch (error) {
        console.error('Erreur lors de l\'envoi des réponses:', error);
        // Gérer les erreurs ici
      }
    };

    const SondageItem = ({ sondage }) => {
    if (!sondage) return null; // Retourner null si aucun sondage n'est disponible

    const questions = JSON.parse(sondage.questions);
    const [selectedResponses, setSelectedResponses] = useState({});

    const handleResponseChange = (questionIndex, response) => {
      setSelectedResponses(prevState => ({
        ...prevState,
        [questionIndex]: response
      }));
    };

    const questionsList = questions.map((question, index) => (
      <div key={index} className='my-4'>
        <h4>Question {index + 1}: {question.question}</h4>
        <div class="mt-2 d-flex align-item-center justify-content-center">
          <Form.Select className="" style={{
              width: "60%",
            }} value={selectedResponses[index]} aria-label="" onChange={(e) => handleResponseChange(index, e.target.value)}>
            <option>Sélectionner une réponse</option>
            {question.responses.map((response, idx) => (
              <option key={idx}>{response}</option>
            ))}
          </Form.Select>
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
    <div className="mx-auto my-4 col-lg-8 col-md-10 col-sm-10 flex-wrap" id="content">
      <div className="row text-center">
        <h1>Veuillez répondre à ce sondage s'il vous plait!</h1>
        <Form className="" style={{ 
          marginTop: "75px",
          // marginLeft:'100px'
          }}
          onSubmit={handleSubmit}>
          <Form.Control
            type="name"
            className=""
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              border: "none",
              padding: "20px",
            }}
            placeholder="Entrer votre nom"
          />    
          <SondageItem sondage={sondage} />;
          <Link to="/">
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
          </Link>
        </Form>
      </div>
    </div>
  )
}
export default Share;