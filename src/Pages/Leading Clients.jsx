import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

const Leading_Clients = () => {
  // Sample data for interested customers
  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', method: 'Email', status: 'Interested' },
    { id: 2, name: 'Jane Smith', method: 'Phone', status: 'Follow-up' },
    { id: 3, name: 'Alice Johnson', method: 'In-Person', status: 'Pending' },
  ]);

  // Function to handle conversion to subscriber
  const handleConvertToSubscriber = (id) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === id ? { ...client, status: 'Subscribed' } : client
      )
    );
  };

  return (
    <div className='d-flex flex-row'>
      <div className='col-3'>
        <Sidebar />
      </div>
      <div className='col-9' style={{ padding: '20px' }}>
        <h1>Leading Clients</h1>
        <p>View Interested Customers Before Official Membership</p>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Method</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.method}</td>
                <td>{client.status}</td>
                <td>
                  {client.status !== 'Subscribed' && (
                    <button
                      className='btn btn-primary'
                      onClick={() => handleConvertToSubscriber(client.id)}
                    >
                      Convert to Subscriber
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leading_Clients;