import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
// import Navbar from './Navbar';
import AboutPage from './AboutPage';
import ChooseLogin from './ChooseLogin';
import AdminLogin from './Admin Login';
import DoctorLogin from './DoctorLogin';
import DoctorRegister from './DoctorRegister';
import PatientLogin from './PatientLogin';
import PatientRegister from './PatientRegister';
import AdminView from './AdminView';
import Patientcard from './Patientcard';
import Dboard from './Dashhboard';
import DoctorCard from './DoctorCard';
import Contact from './Contact';
import Doctortable from './DoctorTable';
import ActiveDoctor from './ActiveDoctor';  
import DoctorView from './DoctorView';
import Billing from './Billling';
import CreateDoctor from './CreateDoctor';
import CreatePatient from './CreatePatient';
import EditPatient from './EditPatient';
import EditDoctor from './EditDoctor';
import PatientView from './PatientView';
import DeactiveDoctor from './DeactiveDoctor';
import Approve from './Approve';
import './Responsive.css';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<AboutPage />} />  
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/choose-login' element={<ChooseLogin/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/doctorlogin' element={<DoctorLogin/>}/>
          <Route path='/doctorregister' element={<DoctorRegister/>}/>
          <Route path='/patientlogin' element={<PatientLogin/>}/>
          <Route path='/patientregister' element={<PatientRegister/>}/>
          <Route path='/adminview' element={<AdminView/>}/>
          <Route path='/dashboard2' element={<Dboard/>}/>
          <Route path='/doctor' element={<DoctorCard/>}/>
          <Route path='/patient' element={<Patientcard/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/doctortable' element={<Doctortable/>}/>
          <Route path='/activedoc' element={<ActiveDoctor/>}/>
          <Route path='/doctorview' element={<DoctorView/>}/>
          <Route path='/billing' element={<Billing/>}/>
          <Route path='/createdoc' element={<CreateDoctor/>}/>
          <Route path='/createpatient' element={<CreatePatient/>}/>
          <Route path='/editpatient' element={<EditPatient/>}/>
          <Route path='/editdoc' element={<EditDoctor/>}/>
          <Route path='/patientview' element={<PatientView/>}/>
          <Route path='/deactivedoc' element={<DeactiveDoctor/>}/>
          <Route path='/approve' element={<Approve/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
