/* eslint-disable no-unused-vars */
import {useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import HomeDash from './HomeDash';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css'

function Sondage() {
  const [sondageList, setSondageList] = useState([{ sondage: "", question:"", reponse:"" }]);

  const handleSondageChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...sondageList];
    list[index][name] = value;
    setSondageList(list);
  };

  const handleSondageRemove = (index) => {
    const list = [...sondageList];
    list.splice(index, 1);
    setSondageList(list);
  };
  

  const handleSondageAdd = () => {
    setSondageList([...sondageList, { sondage: "", question:"", reponse:"" }]);
  };
  return (
    <div className="d-flex">
      <div className="w-auto">

          <Sidebar />
      </div>
      <div className="col overflow-auto">
        <Header />
        <div className="d-flex mx-auto my-4 col-lg-7 col-md-10 col-sm-10 flex-wrap" id="content">

          <h1>Créer votre sondage</h1>

          <form className="container-fluid my-4" autoComplete="off">
            <div className="d-flex justify-content-between align-items-center flex-wrap" id="header">
              <input className="my-4 mx-4" type="text" name="titre_sondage" placeholder="Titre Sondage"/>
              <textarea className="textarea mx-4 mb-4" rows={3} cols={60} name="description_sondage" placeholder="Description sondage">

              </textarea>
            </div>
          </form>


          <form className="form-control" autoComplete="off">
            <div className="form-field">
              <label htmlFor="question">Question(s)</label>
              <div className="header">
                <input
                  name="question_texte"
                  type="text"
                  id="question_texte"
                  placeholder="Demandez-lui son nom..."
                  required
                />
                <br/>
                <input
                  name="reponse_texte"
                  type="text"
                  id="reponse_texte"
                  placeholder="Votre nom..."
                  required
                  className="my-2"
                />
              </div>
              
              <div className="content mt-4">
                {sondageList.map((singleSondage, index) => (
                  <div key={index} className="sondages">
                    <div className="first-division">
                      <input
                        name="question_texte"
                        type="text"
                        id="question_texte"
                        value={singleSondage.sondage}
                        placeholder="Posez votre question..."
                        onChange={(e) => handleSondageChange(e, index)}
                        required
                      />

                      <div class="form-check d-flex align-items-center justify-content-around">
                        <input class="form-check-input" type="radio" name="" id=""/>
                        <input
                          type="text"
                          id="reponse_texte"
                          name="reponse_texte"
                          value={singleSondage.sondage}
                          placeholder="Votre réponse..."
                          onChange={(e) => handleSondageChange(e, index)}
                          required
                          className="my-2"for="reponse"/>
                      </div>
                      <div class="form-check d-flex align-items-center justify-content-around">
                        <input class="form-check-input" type="radio" name="" id=""/>
                        <input type="text"
                          id="reponse_texte"
                          name="reponse_texte"
                          value={singleSondage.sondage}
                          placeholder="Votre réponse..."
                          onChange={(e) => handleSondageChange(e, index)}
                          required
                          className="my-2"for="reponse"/>
                      </div>
                      <div class="form-check d-flex align-items-center justify-content-around">
                        <input class="form-check-input" type="radio" name="" id=""/>
                        <input type="text"
                          id="reponse_texte"
                          name="reponse_texte"
                          value={singleSondage.sondage}
                          placeholder="Votre réponse..."
                          onChange={(e) => handleSondageChange(e, index)}
                          required
                          className="my-2"for="reponse"/>
                      </div>

                    </div>
                    {sondageList.length - 1 === index && sondageList.length < 4 && (
                        <button
                          type="button"
                          onClick={handleSondageAdd}
                          className="add-btn"
                        >
                          <span>Ajouter une question</span>
                        </button>
                      )}
                    <div className="second-division">
                      {sondageList.length !== 1 && (
                        <button
                          type="button"
                          onClick={() => handleSondageRemove(index)}
                          className="remove-btn"
                        >
                          <span>Supprimer</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="output">
              <h2>Output</h2>
              {serviceList &&
                serviceList.map((singleService, index) => (
                  <ul key={index}>
                    {singleService.service && <li>{singleService.service}</li>}
                  </ul>
                ))}
            </div> */}
            <button
            type="submit"
            className="submit-btn"
            >
              <span>Enregistrer</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sondage
