import React, { useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUserFromDB } from '../Components/Store/Store';

const Subscriptions = () => {
  const subscriptions = useSelector((state) => state.users.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Handle delete user
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this subscription?')) {
      dispatch(deleteUserFromDB(id));
    }
  };

  return (
    <div className="d-flex flex-row" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9 p-4">
        <h1 className="mb-4 text-primary">Subscriptions</h1>
        <div className="card shadow-sm p-4">
          <h2 className="mb-4">Registered Memberships</h2>
          <NavLink to="/subscription/add">
            <button className="btn btn-success mb-3">Add Subscription</button>
          </NavLink>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Subscription Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Paid</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => (
                <tr key={sub.id}>
                  <td>{sub.name}</td>
                  <td>{sub.type}</td>
                  <td>{sub.startDate}</td>
                  <td>{sub.endDate}</td>
                  <td>{sub.paid ? 'Yes' : 'No'}</td>
                  <td>
                    <NavLink to={`/subscriptions/edit/${sub.id}`}>
                      <button className="btn btn-primary btn-sm me-2">Edit</button>
                    </NavLink>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(sub.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {subscriptions.length === 0 && (
            <p className="text-center text-muted">No subscriptions found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;