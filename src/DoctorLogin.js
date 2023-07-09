import React from 'react';
import './DoctorLogin.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DoctorLogin = () => {
  const api_url = "https://localhost:7288/api/Login/Doctor";
  const navigate = useNavigate();

  const [docEmail, setEmailOrPhone] = useState('');
  const [docpas, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      docEmail,
      docpas
    };

    console.log(payload);

    axios
      .post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log('Login successful:', response.data);
        navigate('/doctorview');
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <div>
      <img src="https://media.istockphoto.com/id/1408840307/photo/3d-render-of-patient-talking-to-doctor-through-smartphone-on-glossy-blue-background.jpg?s=612x612&w=0&k=20&c=lCp5XC1DD9PHDGY6_inb5_dpjxxdXINaBbGo2bhrQlU=" alt="Background" className='image' style={{ marginTop: '7%', marginLeft: '10%', width: '50%' }} />
      <div className="container">
        <div className="form login">
          <header>Doctor Login</header>
          <form>
            <input
              type="text"
              value={docEmail}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
              placeholder="Enter your email"
            />
            <input
              type="password"
              value={docpas}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <a href="#">Forgot password?</a>
            <input
              type="button"
              className="button"
              onClick={handleFormSubmit}
              value="Login"
            />
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account? <Link to="/doctorregister">Signup</Link>
            </span>
          </div>
        </div>
        <div className="form registration">
          {/* Add your registration form here */}
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
