import React from 'react';
import { Link } from 'react-router-dom';
import './ChooseLogin.css';
import Dashboard from './Dashboard';

const ChooseLogin = ({ adminImageUrl, doctorImageUrl, patientImageUrl }) => {
  return (
    <div className="choose-login-container">
      <div className="dashboard-container">
        <Dashboard />
      </div>
      <div className="choose-login-content">
        <h2>Login as:</h2>
        <div className="card-container">
          <div className="card">
          <img src={'https://media.istockphoto.com/id/1417302981/photo/3d-render-of-male-and-female-doctor-showing-blank-clipboard-smartphone-on-blue-background.jpg?s=612x612&w=0&k=20&c=jk_el0xOGcgUC0UG4oE4UKa2HXlxEAY34-rBrmbNX9g='} alt="Admin" />
            <h3>Admin</h3>
            <Link to="/adminlogin">Login</Link>
          </div>
          <div className="card">
           <img src={'https://media.istockphoto.com/id/1460830024/photo/cartoon-doctor-character-holding-pen-and-clipboard-female-medic-specialist-with-stethoscope.jpg?s=612x612&w=0&k=20&c=NSG51Rz0XimttfV0U4BEWrk3EXVHgWSNnop6bmdoUrQ='} alt="Doctor" /> <h3>Doctor</h3>
            <Link to="/doctorlogin">Login</Link>
            <Link to="/doctorregister">Register</Link>
          </div>
          <div className="card">
          <img src={'https://media.istockphoto.com/id/1317774981/vector/nurse-caring-for-the-elderly.jpg?s=612x612&w=0&k=20&c=Un1PO7gqTuO5JGcZw3kZ3ULDii6frGqYsF8ErZLqmLw='} alt="Patient" />
            <h3>Patient</h3>
            <Link to="/patientlogin">Login</Link>
            <Link to="/patientregister">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLogin;
