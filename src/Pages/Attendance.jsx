import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

const Attendance = () => {
  // State to hold attendance data
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: 'John Doe', time: '10:00 AM', subscription: 'Gold' },
    { id: 2, name: 'Jane Smith', time: '10:15 AM', subscription: 'Silver' },
  ]);

  const [newEntry, setNewEntry] = useState({
    name: '',
    time: '',
    subscription: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleManualRegistration = () => {
    if (newEntry.name && newEntry.time && newEntry.subscription) {
      setAttendanceData((prev) => [
        ...prev,
        { id: prev.length + 1, ...newEntry },
      ]);
      setNewEntry({ name: '', time: '', subscription: '' }); 
    } else {
      alert('Please fill out all fields.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#f8f9fa',
    },
    sidebar: {
      flex: '1',
      paddingRight: '20px',
    },
    content: {
      flex: '3',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    table: {
      marginTop: '20px',
    },
    form: {
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#f1f1f1',
      borderRadius: '8px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    button: {
      backgroundColor: '#007bff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      color: '#fff',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <Sidebar />
      </div>

      <div style={styles.content}>
        <h1>Attendance</h1>
        <p>Track Actual Club Entry</p>

        <table className="table table-striped" style={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time of Entry</th>
              <th>Subscription Type</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.time}</td>
                <td>{entry.subscription}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.form}>
          <h3>Manual Registration</h3>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={newEntry.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="time">Time of Entry</label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-control"
              value={newEntry.time}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="subscription">Subscription Type</label>
            <select
              id="subscription"
              name="subscription"
              className="form-control"
              value={newEntry.subscription}
              onChange={handleInputChange}
            >
              <option value="">Select Subscription</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>
          </div>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            onClick={handleManualRegistration}
          >
            Add Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;