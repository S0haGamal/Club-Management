import React from 'react';
import Sidebar from '../Components/Sidebar';

const Invitations = () => {
  const invitations = [
    { name: 'John Doe', date: '2023-10-01', used: 'Yes', source: 'Email' },
    { name: 'Jane Smith', date: '2023-10-05', used: 'No', source: 'Social Media' },
    { name: 'Alice Johnson', date: '2023-10-10', used: 'Yes', source: 'Referral' },
    { name: 'Bob Brown', date: '2023-10-15', used: 'No', source: 'Website' },
  ];

  return (
    <div className='d-flex flex-row'>
      <div className='col-3'>
        <Sidebar />
      </div>

      <div className='col-9' style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h1>Free Invitations</h1>
        <p>View Free Invitations</p>

        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Did You Use</th>
              <th>Invitation Source</th>
            </tr>
          </thead>
          <tbody>
            {invitations.map((invite, index) => (
              <tr key={index}>
                <td>{invite.name}</td>
                <td>{invite.date}</td>
                <td>{invite.used}</td>
                <td>{invite.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invitations;