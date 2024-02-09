/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import axios from 'axios';
import { instance } from '../../api';

function Sondage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([{ question: '', responses: [''] }]);

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
      const response = await instance.post('survey', {
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
      // Afficher un message de succès ou effectuer une redirection si nécessaire
    } catch (error) {
      console.error('Erreur lors de la requête:', error.message);
      // Afficher un message d'erreur approprié
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="col overflow-auto">
        <Header />
        <div className="mx-auto my-4 col-lg-7 col-md-10 col-sm-10 flex-wrap" id="content">
          <h1>Créer votre sondage</h1>
          <form className="form-control mt-4" id="survey" autoComplete="off" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <input
                className="my-4 mx-4"
                type="text"
                name="title"
                placeholder="Titre Sondage"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="mx-4 mb-4"
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
              <div className="content mt-4">
                {questions.map((question, index) => (
                  <div key={index} className="sondages">
                    <input
                      type="text"
                      value={question.question}
                      placeholder="Posez votre question..."
                      onChange={(e) => handleQuestionChange(e, index)}
                      required
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
                          <button type="button" className="add-btn ms-2" style={{width:300}} onClick={() => handleAddResponse(index)}>Ajouter une réponse</button>
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
            <button type="submit" className="submit-btn">Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sondage;
