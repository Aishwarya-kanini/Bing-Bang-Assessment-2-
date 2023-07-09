import React from 'react';
import Dashhboard from './Dashhboard';
import DoctorCard from './DoctorCard';
import { Link } from 'react-router-dom';

const PatientView = () => {
  return (
    <div className="patient-view">
      <div className="dashboard">
        <Dashhboard />
      </div>
      <div className="doctor-cards">
        <DoctorCard/>
      </div>
      <div className="patient-table-link">
        <Link to="/patienttable">
          <button className="view-patient-table-button">View Patient Table</button>
        </Link>
      </div>
    </div>
  );
};

export default PatientView;
