import React, { useState } from 'react';
import Dashboard from './Dashboard';
import PatientCard from './Patientcard';
import DoctorCard from './DoctorCard';
import CreateDoctor from './CreateDoctor';
import Approve from './Approve';

const DoctorView = () => {
  const [showDoctorCard, setShowDoctorCard] = useState(false);
  const [showCreateDoctor, setShowCreateDoctor] = useState(false);
  const [showApprove, setShowApprove] = useState(false);

  const handleViewDoctorsClick = () => {
    setShowDoctorCard(true);
  };

  const handleCreateDoctorClick = () => {
    setShowCreateDoctor(true);
  };

  const handleApproveClick = () => {
    setShowApprove(true);
  };

  return (
    <div className="doctor-view">
      <div className="dashboard">
        <Dashboard />
      </div>
      <div className="patient-card">
        <PatientCard />
      </div>
      {showDoctorCard && (
        <div className="doctor-cards">
          <DoctorCard />
        </div>
      )}
      <div className="button-container">
        <button className="view-doctors-button" onClick={handleViewDoctorsClick}>
          View Fellow Doctors
        </button>
        <button className="create-doctor-button" onClick={handleCreateDoctorClick}>
          Create Doctor
        </button>
        <button className="approve-button" onClick={handleApproveClick}>
          Approve
        </button>
      </div>
      {showCreateDoctor && (
        <div className="create-doctor">
          <CreateDoctor />
        </div>
      )}
      {showApprove && (
        <div className="approve">
          <Approve />
        </div>
      )}
    </div>
  );
};

export default DoctorView;
