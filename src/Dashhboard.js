import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faCogs, faEnvelope, faMedkit, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Dashhboard.css';
import './Responsive.css';


export default function Dboard() {

        const [isOpen] = useState(true);
  return (
    <div>
    <div className={`dashboard-navbar ${isOpen ? 'open' : ''}`}>
      <ul className="dashboard-navbar-nav">
        <li className="dashboard-nav-item">
          <a href="/" className="dashboard-nav-link">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </li>
        {/* <li className="dashboard-nav-item">
          <a href="#about" className="dashboard-nav-link">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </a>
        </li> */}
        <li className="dashboard-nav-item">
          <a href="#services" className="dashboard-nav-link">
            <FontAwesomeIcon icon={faCogs} /> Services
          </a>
        </li>
        <li className="dashboard-nav-item">
          <a href="/contact" className="dashboard-nav-link">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </a>
        </li>
        <li className="dashboard-nav-item">
          <a href="/doctor" className="dashboard-nav-link">
            <FontAwesomeIcon icon={faMedkit} /> Doctor
          </a>
        </li>
        <li className="dashboard-nav-item">
          <a href="/billing" className="dashboard-nav-link">
            <FontAwesomeIcon icon={faDollarSign} /> Billings
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}
