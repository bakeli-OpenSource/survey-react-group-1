/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Card from "react-bootstrap/Card";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./login.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";

function HomeDash() {
  return (
    <div className="d-flex">
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col overflow-auto bg-light">
        <Header />
        <div>
          <div className="p-5">
            <div className="container-fluid">
              <div className="row">
                <Card
                  border=""
                  style={{ width: "18rem" }}
                  className="me-5 card"
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                      Nombre Sondage
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                        <div className="d-flex">
                        <BsFillBarChartFill />
                        <h3 className="text-center">33</h3>
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  border=""
                  style={{ width: "18rem" }}
                  className="me-5 card"
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                      Nombre Sondage
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                      <h3>33</h3>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  border=""
                  style={{ width: "18rem" }}
                  className="me-5 card"
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                      Nombre Sondage
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                      <h3>33</h3>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDash;
