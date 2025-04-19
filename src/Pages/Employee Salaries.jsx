import React from 'react';
import Sidebar from '../Components/Sidebar';

const Employee_Salaries = () => {
  const employees = [
    { id: 1, name: 'John Doe', role: 'Manager', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Assistant', status: 'Inactive' },
    { id: 3, name: 'Michael Brown', role: 'Developer', status: 'Active' },
    { id: 4, name: 'Emily Davis', role: 'Designer', status: 'Active' },
  ];

  return (
    <div className="d-flex flex-row">
      <div className="col-3">
        <Sidebar />
      </div>

      
      <div className="col-9" style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h1 className="dashboard-title">Club Staff Data</h1>
        <p className="dashboard-subtitle">Name - Role - Status - Edit/Delete Buttons</p>

        <div className="employee-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.role}</td>
                  <td>
                    <span className={`status-badge ${employee.status.toLowerCase()}`}>
                      {employee.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`

        .dashboard-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .dashboard-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }

        .employee-table table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .employee-table th,
        .employee-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        .employee-table th {
          background-color: #f4f4f4;
          font-weight: bold;
        }

        .status-badge {
          padding: 5px 10px;
          border-radius: 5px;
          color: #fff;
          font-size: 12px;
        }

        .status-badge.active {
          background-color: #28a745;
        }

        .status-badge.inactive {
          background-color: #dc3545;
        }

        .btn-edit,
        .btn-delete {
          padding: 5px 10px;
          margin-right: 5px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-edit {
          background-color: #007bff;
          color: #fff;
        }

        .btn-delete {
          background-color: #dc3545;
          color: #fff;
        }

        .btn-edit:hover {
          background-color: #0056b3;
        }

        .btn-delete:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
  );
};

export default Employee_Salaries;