import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './PatientLogin.css';

const PatientLogin = () => {
  const api_url = 'https://localhost:7288/api/Login/Patient';

  const [patientEmail, setEmailOrPhone] = useState('');
  const [patientPass, setPassword] = useState('');
  const [generatedNumber, setRandomNumber] = useState('');

  function sendEmail(patientEmail) {
    const generatedNumber = Math.floor(Math.random() * 9000) + 1000;

    setRandomNumber(generatedNumber); // Store the generated number in the state

    const templateParams = {
      to_name: 'Harshad',
      from_name: 'Aishwarya',
      message: 'The OTP is ' + generatedNumber,
      to_email: patientEmail
    };

    setTimeout(() => {
      emailjs
        .send('service_gsrrhql', 'template_6hxw8r1', templateParams, '1rpxwSDaOO7IoEiXI')
        .then((response) => {
          console.log(generatedNumber);
          console.log('Email sent successfully:', response);
          const Otpnum = prompt('Enter the OTP:');
          const parsedNum = parseInt(Otpnum);
          if (parsedNum === generatedNumber) {
            navigate('/patientview');
          } else {
            alert('Incorrect OTP!');
          }
        });
    }, 5000);
  }

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a payload object with the user input
    const payload = {
      patientEmail,
      patientPass
    };

    axios
      .post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        sendEmail(patientEmail);
        console.log('New item added:', response.data);
        // Perform any necessary actions after successful POST request
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
        // Perform any necessary actions for error handling
      });
  };

  return (
    <div>
      <img src="https://i.pinimg.com/564x/35/35/1e/35351edc2a8dc23392089b89a43cad03.jpg" alt="Background" className="image" style={{ marginTop: '1%', marginLeft: '10%', width: '50%' }} />
      <div className="container">
        <div className="form login">
          <header>Patient Login</header>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={patientEmail}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
              placeholder="Enter your email"
            />
            <input
              type="password"
              value={patientPass}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <a href="#">Forgot password?</a>
            <input type="submit" className="button" value="Login" />
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account? <Link to="/patientregister">Signup</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
