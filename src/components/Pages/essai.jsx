import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewSondage() {
  const [sondages, setSondages] = useState([]);
  const [error, setError] = useState('');
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
        console.log(sondages)
      } catch (error) {
        console.error('Erreur lors de la récupération des données des sondages:', error.message);
        setError('Erreur lors de la récupération des données des sondages');
      }
    };

    fetchData();
  }, [token]); // Déclencher l'effet uniquement lorsque le token change

  const SondageItem = ({ sondage }) => {

    return (
      <div className="d-flex">
        <h3>{sondage?.title}</h3>
      </div>
    );
  };

  return (
    <div>
      <h1>Liste des Sondages</h1>
      {sondages?.data?.map((sondage) => {
        return <SondageItem key={sondage.id} sondage={sondage} />;
      })}
    </div>
  );
}

export default ViewSondage;
