// import React, { useState } from 'react';
// import axios from 'axios';
// import './PatientRegister.css';
// import { useNavigate } from 'react-router-dom';

// const PatientRegister = () => {
//   const [formData, setFormData] = useState({
//     PatientId: null,
//     PatientName: '',
//     PatientAge: null,
//     PatientGender: '',
//     PatientDescription: '',
//     PatientEmail: '',
//     PatientPass: '',
//     PatientImg: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevState) => ({
//       ...prevState,
//       PatientImg: file
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = new FormData();
//     payload.append('PatientName', formData.PatientName);
//     payload.append('PatientAge', formData.PatientAge);
//     payload.append('PatientGender', formData.PatientGender);
//     payload.append('PatientDescription', formData.PatientDescription);
//     payload.append('PatientEmail', formData.PatientEmail);
//     payload.append('PatientPass', formData.PatientPass);
//     payload.append('PatientImg', formData.PatientImg);

//     try {
//       const response = await axios.post('https://localhost:7033/api/Patient', payload, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       console.log('Response:', response.data);
//       // Handle success or show a success message to the user
//       navigate('/patientlog');
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error or show an error message to the user
//     }
//   };

//   return (
//     <div className="patient-register-card">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="PatientName" className="patient-register-label">
//           Patient Name:
//         </label>
//         <input
//           type="text"
//           name="PatientName"
//           id="PatientName"
//           className="patient-register-input"
//           value={formData.PatientName}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="PatientAge" className="patient-register-label">
//           Patient Age:
//         </label>
//         <input
//           type="number"
//           name="PatientAge"
//           id="PatientAge"
//           className="patient-register-input"
//           value={formData.PatientAge}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="PatientGender" className="patient-register-label">
//           Patient Gender:
//         </label>
//         <input
//           type="text"
//           name="PatientGender"
//           id="PatientGender"
//           className="patient-register-input"
//           value={formData.PatientGender}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="PatientDescription" className="patient-register-label">
//           Patient Description:
//         </label>
//         <textarea
//           name="PatientDescription"
//           id="PatientDescription"
//           className="patient-register-textarea"
//           value={formData.PatientDescription}
//           onChange={handleChange}
//         ></textarea>
//         <br />
//         <label htmlFor="PatientEmail" className="patient-register-label">
//           Patient Email:
//         </label>
//         <input
//           type="email"
//           name="PatientEmail"
//           id="PatientEmail"
//           className="patient-register-input"
//           value={formData.PatientEmail}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="PatientPass" className="patient-register-label">
//           Patient Password:
//         </label>
//         <input
//           type="password"
//           name="PatientPass"
//           id="PatientPass"
//           className="patient-register-input"
//           value={formData.PatientPass}
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="PatientImg" className="patient-register-label">
//           Patient Image:
//         </label>
//         <input
//           type="file"
//           name="PatientImg"
//           id="PatientImg"
//           className="patient-register-file"
//           onChange={handleFileChange}
//         />
//         <br />
//         <button type="submit" className="patient-register-submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PatientRegister;
import React, { useState } from 'react';
import axios from 'axios';
import './PatientRegister.css';
import { useNavigate } from 'react-router-dom';

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    PatientId: null,
    PatientName: '',
    PatientAge: null,
    PatientGender: '',
    PatientDescription: '',
    PatientEmail: '',
    PatientPass: '',
    PatientImg: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      PatientImg: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('PatientName', formData.PatientName);
    payload.append('PatientAge', formData.PatientAge);
    payload.append('PatientGender', formData.PatientGender);
    payload.append('PatientDescription', formData.PatientDescription);
    payload.append('PatientEmail', formData.PatientEmail);
    payload.append('PatientPass', formData.PatientPass);
    payload.append('PatientImg', formData.PatientImg);

    try {
      const response = await axios.post('https://localhost:7033/api/Patient', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);
      // Handle success or show a success message to the user
      navigate('/patientlog');
    } catch (error) {
      console.error('Error:', error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div className="patient-register-container">
      <div className="patient-register-image-container">
        <img src="https://media.istockphoto.com/id/1371096455/photo/3d-rendering-medical-illustration-isolated-on-white-background-heart-checkup-online.webp?b=1&s=170667a&w=0&k=20&c=omk531m855jEYVKU_wQ1EelJPTSDnuGzHWH9tRhRO_E=" alt="Patient" className="patient-register-image" />
      </div>
      <div className="patient-register-form-container">
        <div className="patient-register-card">
          <form onSubmit={handleSubmit}>
            <label htmlFor="PatientName" className="patient-register-label">
              Patient Name:
            </label>
            <input
              type="text"
              name="PatientName"
              id="PatientName"
              className="patient-register-input"
              value={formData.PatientName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="PatientAge" className="patient-register-label">
              Patient Age:
            </label>
            <input
              type="number"
              name="PatientAge"
              id="PatientAge"
              className="patient-register-input"
              value={formData.PatientAge}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="PatientGender" className="patient-register-label">
              Patient Gender:
            </label>
            <input
              type="text"
              name="PatientGender"
              id="PatientGender"
              className="patient-register-input"
              value={formData.PatientGender}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="PatientDescription" className="patient-register-label">
              Patient Description:
            </label>
            <textarea
              name="PatientDescription"
              id="PatientDescription"
              className="patient-register-textarea"
              value={formData.PatientDescription}
              onChange={handleChange}
            ></textarea>
            <br />
            <label htmlFor="PatientEmail" className="patient-register-label">
              Patient Email:
            </label>
            <input
              type="email"
              name="PatientEmail"
              id="PatientEmail"
              className="patient-register-input"
              value={formData.PatientEmail}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="PatientPass" className="patient-register-label">
              Patient Password:
            </label>
            <input
              type="password"
              name="PatientPass"
              id="PatientPass"
              className="patient-register-input"
              value={formData.PatientPass}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="PatientImg" className="patient-register-label">
              Patient Image:
            </label>
            <input
              type="file"
              name="PatientImg"
              id="PatientImg"
              className="patient-register-file"
              onChange={handleFileChange}
            />
            <br />
            <button type="submit" className="patient-register-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
