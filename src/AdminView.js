import React from 'react';
import DoctorCard from './DoctorCard';
import PatientCard from './Patientcard';
import { Link } from 'react-router-dom';
import Dashhboard from './Dashhboard';
import './AdminView.css'; 

const AdminView = () => {
  return (
    <div className="admin-view-container">
      <div className="dashboard-container">
        <Dashhboard />
      </div>
      <div className="content-container">
        <div className="component-container">
          <div className="component-header">
            <h2>DOCTORS WE HAVE</h2>
            <Link to="/doctortable">
              <button className="view-more-button">View More/Modify</button>
            </Link>
          </div>
          <DoctorCard />
        </div>
        <div className="component-container">
          <div className="component-header">
            <h2>PATIENTS WE SERVE</h2>
          </div>
          <PatientCard />
        </div>
      </div>
    </div>
  );
};

export default AdminView;

