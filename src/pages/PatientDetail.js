import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from '../style/PatientDashboard.module.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

function App() {
  const { uuid } = useParams(); // Get UUID from URL parameter
  const [patientInfo, setPatientInfo] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [patientId, setPatientId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    // Fetch patient details and documents based on UUID
    axios.get(`http://localhost:3001/patient/${uuid}`)
      .then(response => {
        const { patientDetails, documents } = response.data;
        setPatientInfo(patientDetails);
        setComment(patientDetails.comment); // Set the comment from the response
        setDocuments(documents);
      })
      .catch(error => {
        console.error('Error fetching patient details and documents:', error);
      });
  }, [uuid]); // Include uuid in dependency array

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value); // Update the comment state when input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update patient info with the modified comment
    const updatedPatientInfo = { comment };
    try {
      // Make a request to update the patient's comment
      await axios.post(`http://localhost:3001/patient/comment/${uuid}`, updatedPatientInfo);
      console.log('Comment updated successfully');
      // Optionally, you can fetch updated patient details here
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const handlePatientIdChange = (event) => {
    setPatientId(event.target.value);
  };

  const handleDoctorIdChange = (event) => {
    setDoctorId(event.target.value);
  };

  const handleFileUpload = async () => {
    if (!selectedFile || !patientId || !doctorId) {
      console.error('Please select a file and enter patient and doctor IDs.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('patientId', patientId);
    formData.append('doctorId', doctorId);

    try {
      await axios.post('http://localhost:3001/patient/upload-documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded successfully.');
      // After successful upload, fetch documents again to update the list
      axios.get(`http://localhost:3001/patient/${uuid}/documents`)
        .then(response => {
          setDocuments(response.data);
        })
        .catch(error => {
          console.error('Error fetching patient documents:', error);
        });
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <Nav/> 
      <div className={styles.centerPatientDashboard}>
        <div className={styles.containerPatientDashboard}>
          <h2 className={styles.patientHeading}>Patient Details</h2>
          <div>
            {patientInfo ? (
              <div>
                <p>Name: {patientInfo.name}</p>
                <p>Age: {patientInfo.age}</p>
                <p>Gender: {patientInfo.contact}</p>
                <p>Comment: {patientInfo.comment}</p>
                <form onSubmit={handleSubmit} className={styles.patientForm}>
                  <label htmlFor="comment" className={styles.patientLabel}>Comment:</label>
                  <textarea id="comment" value={comment} onChange={handleCommentChange} />
                  <button type="submit" className={styles.patientButton}>Submit Comment</button>
                </form>
              </div>
            ) : (
              <p>Loading patient details...</p>
            )}
          </div>
          <div className={styles.App}>
            <h1>File Upload</h1>
            <input type="file" onChange={handleFileChange} />
            <input type="text" placeholder="Patient ID" value={patientId} onChange={handlePatientIdChange} />
            <input type="text" placeholder="Doctor ID" value={doctorId} onChange={handleDoctorIdChange} />
            <button onClick={handleFileUpload} className={styles.patientButton}>Upload</button>
          </div>
  
          {/* Display uploaded documents */}
          <div className={styles.fileInputContainerPatient}>
            <h3>Uploaded Documents</h3>
            <ul className={styles.patientList}>
              {documents.map((document, index) => (
                <li key={index}>
                  <a href={`http://localhost:3001/${document.file_path}`} target="_blank" rel="noopener noreferrer">
                    {document.file_path} {/* Render the appropriate property of the document object */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;