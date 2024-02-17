/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Card from "react-bootstrap/Card";
import "./login.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, Navigate } from "react-router-dom";
// graph
import { BarChart, Bar,  Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
// end graph

function HomeDash() {
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState('');
  const token = sessionStorage.getItem('token');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([{ question: '', responses: [''] }]);
  const [isCreated, setIsCreated] = useState(false); // Etat pour gérer la redirection

  const handleQuestionChange = (e, index) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const handleResponseChange = (e, questionIndex, responseIndex) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].responses[responseIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddResponse = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].responses.push('');
    setQuestions(updatedQuestions);
  };

  const handleRemoveResponse = (questionIndex, responseIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].responses.splice(responseIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', responses: [''] }]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:8000/api/survey', {
        title: title,
        description: description,
        questions: questions,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Réponse de la requête POST:', response.data);
      // Réinitialiser les champs du formulaire après la soumission réussie
      setTitle('');
      setDescription('');
      setQuestions([{ question: '', responses: [''] }]);
      setIsCreated(true);
      // Afficher un message de succès ou effectuer une redirection si nécessaire
    } catch (error) {
      console.error('Erreur lors de la requête:', error.message);
      // Afficher un message d'erreur approprié
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/survey/count', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Réponse de la requête:', response.data);
        setTotalPosts(response.data.totalPosts); // Mettre à jour les sondages créés avec les données récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération des données des sondages:', error.message);
        setError('Erreur lors de la récupération des données des sondages');
      }
    };

    fetchData();
  }, [token]); // Déclencher l'effet uniquement lorsque le token change

  if (isCreated) {
    return <Navigate to="/voir-sondage?successMessage=Sondage%20créé%20!%20avec%20succés"/>;
  }

  return (
    <div className="d-flex">
      <Sidebar />
      
      <div className="col overflow-auto bg-light">
        <Header />
        <div>
          <div className="p-5">
            <div className="container-fluid d-flex align-item-center justify-content-center">
              <div className="row">
                <Card
                  border=""
                  style={{ width: "25rem" }}
                  className="card"
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                      Sondages totaux créés
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                        <div className="d-flex align-item-center justify-content-center text-success">
                          <h3 className="fs-1">{totalPosts}</h3>
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div> 
          </div>
          <div className="d-flex align-item-center justify-content-center">
              <Button variant="success" className="p-4" onClick={handleShow}>
                <strong>Créer Votre sondage</strong>
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Faites vous plaisir et créer un sondage</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form className="form-control mt-4" id="survey" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <input
                        className="mt-4 mx-4"
                        type="text"
                        name="title"
                        placeholder="Titre Sondage"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <textarea
                        className="mx-4 my-4 border-1"
                        rows={3}
                        cols={70}
                        name="description"
                        placeholder="Description sondage"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>

                    <div className="form-field">
                      <label>Question(s)</label>
                      <div className="content my-2">
                        {questions.map((question, index) => (
                          <div key={index} className="sondages">
                            <input
                              type="text"
                              value={question.question}
                              placeholder="Posez votre question..."
                              onChange={(e) => handleQuestionChange(e, index)}
                              required
                              className='my-2'
                            />
                            {question.responses.map((response, responseIndex) => (
                              <div key={responseIndex} className="form-check d-flex align-items-center justify-content-around">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name={`response_${index}`}
                                  id={`response_${index}_${responseIndex}`}
                                />
                                <input
                                  type="text"
                                  value={response}
                                  placeholder="Votre réponse..."
                                  onChange={(e) => handleResponseChange(e, index, responseIndex)}
                                  required
                                />
                                {responseIndex === question.responses.length - 1 && (
                                  <button type="button" className="add-btn mx-2" style={{width:250}} onClick={() => handleAddResponse(index)}>Ajouter une réponse</button>
                                )}
                                {responseIndex !== 0 && (
                                  <button type="button" className="remove-btn" onClick={() => handleRemoveResponse(index, responseIndex)}>Supprimer</button>
                                )}
                              </div>
                            ))}
                            {index === questions.length - 1 && (
                              <button type="button" className="add-btn" onClick={handleAddQuestion}>Ajouter une question</button>
                            )}
                            {index !== 0 && (
                              <button type="button" className="remove-btn" onClick={() => handleRemoveQuestion(index)}>Supprimer</button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button type="submit" onClick={handleClose} className="submit-btn">Enregistrer</button>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDash;
