import React from 'react';
import Sidebar from '../Components/Sidebar';

const Time = () => {
  const ticketData = [
    { id: 1, name: 'John Doe', type: 'Daily', date: '2023-10-01', price: '$10', status: 'Used' },
    { id: 2, name: 'Jane Smith', type: 'Individual', date: '2023-10-02', price: '$15', status: 'Unused' },
    { id: 3, name: 'Alice Johnson', type: 'Daily', date: '2023-10-03', price: '$10', status: 'Used' },
    { id: 4, name: 'Bob Brown', type: 'Individual', date: '2023-10-04', price: '$15', status: 'Unused' },
  ];

  return (
    <div className='d-flex flex-row'>
      <div className='col-3'>
        <Sidebar />
      </div>

      <div className='col-9 p-4'>
        <h2>Ticket Log</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Ticket Type</th>
              <th>Date</th>
              <th>Price</th>
              <th>Usage Status</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.name}</td>
                <td>{ticket.type}</td>
                <td>{ticket.date}</td>
                <td>{ticket.price}</td>
                <td>{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Time;