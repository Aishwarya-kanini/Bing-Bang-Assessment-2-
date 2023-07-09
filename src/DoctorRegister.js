import React, { useState } from 'react';
import axios from 'axios';
import './DoctorRegister.css';
import { useNavigate } from 'react-router-dom';

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    docName: '',
    docSpecialty: '',
    docEmail: '',
    docPas: '',
    docActive: true,
    docImg: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'docImg') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('docName', formData.docName);
      formDataToSend.append('docSpecialty', formData.docSpecialty);
      formDataToSend.append('docEmail', formData.docEmail);
      formDataToSend.append('docPas', formData.docPas);
      formDataToSend.append('docActive', formData.docActive);
      formDataToSend.append('docImg', formData.docImg);

      const response = await axios.post('https://localhost:7288/api/Doctor', formDataToSend);

      console.log('Response:', response.data);
      navigate('/doctorlogin');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="doctor-register-container">
      <div className="doctor-register-image-container">
        <img src="https://media.istockphoto.com/id/1190453572/photo/medical-cartoon-doctor-symbol-image-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=9ZhzqF0KTBAfZ9vmelDgQTgSRzfjpWunjhSXLFlwcno=" alt="Doctor" className="doctor-register-image" />
      </div>
      <div className="doctor-register-form-container">
        <form className="doctor-register-form" onSubmit={handleSubmit}>
          <label htmlFor="docName">
            Name:
            <input type="text" name="docName" value={formData.docName} onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="docSpecialty">
            Specialty:
            <input type="text" name="docSpecialty" value={formData.docSpecialty} onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="docEmail">
            Email:
            <input type="email" name="docEmail" value={formData.docEmail} onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="docPas">
            Password:
            <input type="password" name="docPas" value={formData.docPas} onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="docActive">
            Active:
            <input type="checkbox" name="docActive" checked={formData.docActive} onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="docImg">
            Image:
            <input type="file" name="docImg" onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegister;
