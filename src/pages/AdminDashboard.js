import React, { useState, useEffect } from 'react';
import axios from 'axios';
import adminDashboardStyles from "../style/AdminDashboard.module.css";
import Nav from "../components/nav"
import Footer from "../components/footer"

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [contact, setContact] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    axios.get('http://localhost:3001/admin/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDoctor = { name, specialty, contact, username, password };

    axios.post('http://localhost:3001/admin/api/register-doctor', newDoctor)
      .then(response => {
        console.log('Doctor registered successfully:', response.data);
        // Fetch updated list of doctors
        fetchDoctors();
      })
      .catch(error => {
        console.error('Error registering doctor:', error);
      });

    // Reset form fields after submission
    setName('');
    setSpecialty('');
    setContact('');
    setUsername('');
    setPassword('');
  };

  return (
    <>
    <Nav/>
    <div className={adminDashboardStyles.adminContainer}>
      <h2 className={adminDashboardStyles.adminHeading}>Admin Dashboard</h2>
      <h3 className={adminDashboardStyles.adminSubHeading}>Register New Doctor</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={adminDashboardStyles.adminLabel}>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={adminDashboardStyles.adminInput} required />
          </div>
          <div>
            <label className={adminDashboardStyles.adminLabel}>Specialty:</label>
            <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} className={adminDashboardStyles.adminInput} required />
          </div>
          <div>
            <label className={adminDashboardStyles.adminLabel}>Contact:</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className={adminDashboardStyles.adminInput} required />
          </div>
          <div>
            <label className={adminDashboardStyles.adminLabel}>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className={adminDashboardStyles.adminInput} required />
          </div>
          <div>
            <label className={adminDashboardStyles.adminLabel}>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={adminDashboardStyles.adminInput} required />
          </div>
          <button type="submit" className={adminDashboardStyles.adminButton}>Register Doctor</button>
        </form>
      </div>

      <h3 className={adminDashboardStyles.adminSubHeading}>Registered Doctors</h3>
      <table className={adminDashboardStyles.adminTable}>
        <thead>
          <tr>
            <th className={adminDashboardStyles.adminTableHeader}>Name</th>
            <th className={adminDashboardStyles.adminTableHeader}>Specialty</th>
            <th className={adminDashboardStyles.adminTableHeader}>Contact</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td className={adminDashboardStyles.adminTableData}>{doctor.name}</td>
              <td className={adminDashboardStyles.adminTableData}>{doctor.specialty}</td>
              <td className={adminDashboardStyles.adminTableData}>{doctor.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );

};

export default AdminDashboard;
