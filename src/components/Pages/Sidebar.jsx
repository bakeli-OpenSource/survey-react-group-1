/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineFall } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa"; 
import logoSmall from "../../components/images/logo-small.png";
import logoSmall2 from "../../components/images/logoSmall.png";

import './style.css'
import { Link } from 'react-router-dom';

function Sidebar() {
    const [active, SetActive] = useState(1);
  return (
    <div className='sidebar d-flex justify-content-between flex-column   py-3 ps-3 pe-5' style={{height:'auto'}}>
        <div>
            <a href="" className='p-3 text-dark text-decoration-none'>
            {/* <CiLogin />  */}
            {/* <span className=''>RxDForm</span> */}
            <img  src={logoSmall} alt="logo" style={{
            width:'60%',

            
        }}/>
            </a>
            <hr className="text-dark mt-2" />
            <ul className="nav nav-pill flex-column">
                <li className= {active === 1 ? "active  p-3 " : "nav-item p-3"}
                 onClick={e => SetActive(1)}>
                    <Link to="/home-dash" className='p-3  text-decoration-none'>
                        <AiOutlineDashboard className='' style={{color: '#A1A1AA'}}/>
                        <span className=''>Dashboard</span>
                    </Link>
                </li>
                {/* <li className= {active === 2 ? "active  p-3 " : "nav-item p-3"}
                 onClick={e => SetActive(2)} >
                    <Link to="/create-sondage" className='p-3  text-decoration-none'>
                    <AiOutlineBarChart className='' style={{color: '#A1A1AA'}}/>
                        <span className=''>Sondage</span>
                    </Link>
                </li> */}
                <li className= {active === 3 ? "active nav-item p-3 " : "nav-item p-3"}
                 onClick={e => SetActive(3)}>
                    <Link to="/voir-sondage" className='p-3 text-decoration-none'> 
                        <AiOutlineEye className='' style={{color: '#A1A1AA'}}/>
                        <span className=''>Voir Sondage</span>
                    </Link>
                </li>
                <li className= {active === 4 ? "active nav-item p-3 " : "nav-item p-3"}
                 onClick={e => SetActive(4)}>
                    <Link to="/resultat-sondage" className='p-3  text-decoration-none'>
                        <AiOutlineFall className='' style={{color: '#A1A1AA'}}/>
                        <span className=''>Resultats</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div>
            <hr className=" mt-2" />
            <div className="nav-item p-3">
                <Link to="/user-profil" className='p-3 text-dark text-decoration-none'>
                    <FaRegUserCircle className='' style={{color: '#A1A1AA'}}/>
                    <span className=''>User</span>
                </Link>
            </div>
        </div>
        
    </div>
    
  )
}

export default Sidebar