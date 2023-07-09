import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoctorTable.css';
import EditDoctor from './EditDoctor';
import { Link } from 'react-router-dom';


export default function DoctorTable() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    fetchDoctorsData();
  }, []);

  const fetchDoctorsData = async () => {
    try {
      const response = await axios.get('https://localhost:7288/api/Doctor');
      setDoctorsData(response.data);
    } catch (error) {
      console.error('Error fetching doctors data:', error);
    }
  };

  const handleEditClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleDeleteClick = async (doctorId) => {
    try {
      await axios.delete(`https://localhost:7288/api/Doctor/${doctorId}`);
      setDoctorsData((prevData) =>
        prevData.filter((doctor) => doctor.docId !== doctorId)
      );
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
    <Link to="/approve">
    <button className="view-more-button">Approve</button>
    </Link>
    <div className="cards-container">
      {doctorsData.map((doctor, index) => (
        <div className="card" key={index}>
          <div>
            Doctor Name: {doctor.docName}
          </div>
          <div>
            Specialty: {doctor.docSpecialty}
          </div>
          <div>
            Email: {doctor.docEmail}
          </div>
          <div>
            <strong>Active</strong> {doctor.status}
          </div>
          <div className="button-container">
            <button onClick={() => handleEditClick(doctor)}>
              <span className="edit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41L18.37 3.7c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.13 3.13 1.83-1.82zm-2.34 2.34l-10.36 10.36H4v-2.83L14.96 6.71l3.13 3.13z" />
                </svg>
              </span>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteClick(doctor.docId)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {showModal && (
        <EditDoctor
          showModal={showModal}
          closeModal={closeModal}
          doctor={selectedDoctor}
        />
      )}
    </div>
    </div>
  );
}
