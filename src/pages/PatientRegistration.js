import React, { useState } from 'react';
import axios from 'axios';
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../style/PatientRegistration.css"

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
      <Nav />
      <div class="Registration-container">
        <div class="registration-container">
          <h2>Patient Registration</h2>
          <form id="registration-form" class="registration-form" onSubmit="handleSubmit(event)">
            <div>
              <label for="name" class="registration-label">Name:</label>
              <input type="text" id="name" class="registration-input" required />
            </div>
            <div>
              <label for="age" class="registration-label">Age:</label>
              <input type="text" id="age" class="registration-input" required />
            </div>
            <div>
              <label for="contact" class="registration-label">Contact:</label>
              <input type="text" id="contact" class="registration-input" required />
            </div>
            <div>
              <label for="password" class="registration-label">Password:</label>
              <input type="password" id="password" class="registration-input" required />
            </div>
            <button type="submit" class="registration-button">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PatientRegistration;