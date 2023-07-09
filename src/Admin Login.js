// import React from 'react';
// import './Admin Login.css';
// import axios from 'axios';
// import { useState } from 'react';
// import { useRoutes } from 'react-router-dom';

// const AdminLogin = () => {
//   const api_url = "https://localhost:7288/api/Login/Admin";

//   const [adminEmail, setEmailOrPhone] = useState('');
//   const [adminPassword, setPassword] = useState('');

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Create a payload object with the user input
//     const payload = {
//         adminEmail,
//         adminPassword
//     };

//     console.log(payload);

//     axios
//       .post(api_url, payload, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then((response) => {
//         console.log('New item added:', response.data);
//         // Perform any necessary actions after successful POST request
//       })
//       .catch((error) => {
//         console.error('Error adding new item:', error);
//         // Perform any necessary actions for error handling
//       });
//   };

//   const routes = useRoutes([
//     {
//       path: '/',
//       element: (
//         <div>
//           <img src="https://media.istockphoto.com/id/928404958/photo/pictogram-teamwork-with-stethoscope-3d-rendering.jpg?s=612x612&w=0&k=20&c=ZgaNcs5BXiUe4jhYtxzafe8AsZxEpqt9yAY-QBmmJUs=" alt="Background" className='image' style={{ marginTop: '1%', marginLeft: '10%', width: '50%' }} />
//           <div className="container">
//             <div className="form login">
//               <header>Admin Login</header>
//               <form>
//                 <input
//                   type="text"
//                   value={adminEmail}
//                   onChange={(e) => setEmailOrPhone(e.target.value)}
//                   required
//                   placeholder="Enter your Email"
//                 />
//                 <input
//                   type="password"
//                   value={adminPassword}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   placeholder="Enter your password"
//                 />
//                 <a href="#">Forgot password?</a>
//                 <input
//                   type="button"
//                   className="button"
//                   onClick={handleFormSubmit}
//                   value="Login"
//                 />
//               </form>
//               <div className="signup">
//                 <span className="signup">Don't have an account? <label htmlFor="check">Signup</label></span>
//               </div>
//             </div>
//             <div className="form registration">
//               {/* Add your registration form here */}
//             </div>
//           </div>
//         </div>
//       )
//     }
//   ]);

//   return routes;
// };

// export default AdminLogin;

import React, { useState } from 'react';
import axios from 'axios';
import { useRoutes, useNavigate } from 'react-router-dom';
import AdminView from './AdminView';

const AdminLogin = () => {
  const api_url = "https://localhost:7288/api/Login/Admin";

  const [adminEmail, setEmailOrPhone] = useState('');
  const [adminPassword, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      adminEmail,
      adminPassword
    };

    console.log(payload);

    axios
      .post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log('New item added:', response.data);
        navigate('/adminview'); 
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
      });
  };

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <div>
          <img src="https://media.istockphoto.com/id/928404958/photo/pictogram-teamwork-with-stethoscope-3d-rendering.jpg?s=612x612&w=0&k=20&c=ZgaNcs5BXiUe4jhYtxzafe8AsZxEpqt9yAY-QBmmJUs=" alt="Background" className='image' style={{ marginTop: '1%', marginLeft: '10%', width: '50%' }} />
          <div className="container">
            <div className="form login">
              <header>Admin Login</header>
              <form>
                <input
                  type="text"
                  value={adminEmail}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                  placeholder="Enter your Email"
                />
                <input
                  type="password"
                  value={adminPassword}
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
                <span className="signup">Don't have an account? <label htmlFor="check">Signup</label></span>
              </div>
            </div>
            <div className="form registration">
            </div>
          </div>
        </div>
      )
    },
    {
      path: '/adminview',
      element: <AdminView />
    }
  ]);

  return routes;
};

export default AdminLogin;
