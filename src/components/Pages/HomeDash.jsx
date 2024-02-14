/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Card from "react-bootstrap/Card";
import "./login.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
// graph
import { BarChart, Bar,  Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
// end graph

function HomeDash() {

// Graph

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// end graph

  return (
    <div className="d-flex">
      <Sidebar />
      
      <div className="col overflow-auto">
        <Header />
        <div>
          <div className="p-5">
            <div className="container-fluid">
              <div className="row">
                <Card
                  border=""
                  style={{ width: "16rem" , backgroundColor: '#fff'}}
                  className="me-5 card"
  
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                      Nombre Sondages 
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                        <div className="d-flex">
                        {/* <BsFillBarChartFill /> */}
                        <h3 className="">33</h3>
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  border=""
                  style={{ width: "16rem", backgroundColor: '#fff'}}
                  className="me-5 card"
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                      Sondages 
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                      <h3>20</h3>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  border=""
                  style={{ width: "16rem" , backgroundColor: '#fff'}}
                  className="me-5 card"
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                       Sondages partagés
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                      <h3>13</h3>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* graphique */}

        <div className='charts'>
          
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#FF9700" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              <Bar dataKey="uv" fill="#009788" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#FF9700" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#009788" />
            </LineChart>
          </ResponsiveContainer>
    
        </div>

        {/* fin graphique */}

      </div>
    </div>
  );
}

export default HomeDash;
