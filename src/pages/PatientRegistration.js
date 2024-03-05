import React, { useState } from 'react';
import axios from 'axios';
import Nav from "../components/nav";
import Footer from "../components/footer";

const PatientRegistration = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Prepare data to send to the server
    const patientData = { name, age, contact, password };
    
    // Send a POST request to the backend endpoint
    axios.post('http://localhost:3001/patient/api/register-patient', patientData)
      .then(response => {
        console.log('Patient registered successfully:', response.data);
        // Reset form fields after successful registration
        setName('');
        setAge('');
        setContact('');
        setPassword('');
      })
      .catch(error => {
        console.error('Error registering patient:', error);
      });
  };

  return (
    <>
    <Nav/>
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label>Contact:</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default PatientRegistration;