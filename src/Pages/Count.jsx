import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

const Count = () => {
  const [activeTab, setActiveTab] = useState('subscriptions');
  const [subscriptions, setSubscriptions] = useState([]);
  const [ticketTypes, setTicketTypes] = useState([]);
  const [branches, setBranches] = useState([]);

  const handleAddSubscription = () => {
    setSubscriptions([...subscriptions, { id: subscriptions.length + 1, name: '', price: '' }]);
  };

  const handleAddTicketType = () => {
    setTicketTypes([...ticketTypes, { id: ticketTypes.length + 1, type: '', price: '' }]);
  };

  const handleAddBranch = () => {
    setBranches([...branches, { id: branches.length + 1, name: '', location: '' }]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'subscriptions':
        return (
          <div>
            <h3>Configure Subscriptions</h3>
            <p>Manage subscription plans and pricing here.</p>
            <button className="btn btn-primary mb-3" onClick={handleAddSubscription}>
              Add Subscription
            </button>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub, index) => (
                  <tr key={index}>
                    <td>{sub.id}</td>
                    <td>
                      <input
                        type="text"
                        value={sub.name}
                        onChange={(e) =>
                          setSubscriptions(
                            subscriptions.map((s) =>
                              s.id === sub.id ? { ...s, name: e.target.value } : s
                            )
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={sub.price}
                        onChange={(e) =>
                          setSubscriptions(
                            subscriptions.map((s) =>
                              s.id === sub.id ? { ...s, price: e.target.value } : s
                            )
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'ticketTypes':
        return (
          <div>
            <h3>Configure Ticket Types</h3>
            <p>Set up and manage ticket types for events.</p>
            <button className="btn btn-primary mb-3" onClick={handleAddTicketType}>
              Add Ticket Type
            </button>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {ticketTypes.map((ticket, index) => (
                  <tr key={index}>
                    <td>{ticket.id}</td>
                    <td>
                      <input
                        type="text"
                        value={ticket.type}
                        onChange={(e) =>
                          setTicketTypes(
                            ticketTypes.map((t) =>
                              t.id === ticket.id ? { ...t, type: e.target.value } : t
                            )
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={ticket.price}
                        onChange={(e) =>
                          setTicketTypes(
                            ticketTypes.map((t) =>
                              t.id === ticket.id ? { ...t, price: e.target.value } : t
                            )
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'branches':
        return (
          <div>
            <h3>Set Up Branches</h3>
            <p>Manage branch locations and details here.</p>
            <button className="btn btn-primary mb-3" onClick={handleAddBranch}>
              Add Branch
            </button>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {branches.map((branch, index) => (
                  <tr key={index}>
                    <td>{branch.id}</td>
                    <td>
                      <input
                        type="text"
                        value={branch.name}
                        onChange={(e) =>
                          setBranches(
                            branches.map((b) =>
                              b.id === branch.id ? { ...b, name: e.target.value } : b
                            )
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={branch.location}
                        onChange={(e) =>
                          setBranches(
                            branches.map((b) =>
                              b.id === branch.id ? { ...b, location: e.target.value } : b
                            )
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h1>General System Settings</h1>
        <div className="mt-4">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'subscriptions' ? 'active' : ''}`}
                onClick={() => setActiveTab('subscriptions')}
              >
                Subscriptions
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'ticketTypes' ? 'active' : ''}`}
                onClick={() => setActiveTab('ticketTypes')}
              >
                Ticket Types
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'branches' ? 'active' : ''}`}
                onClick={() => setActiveTab('branches')}
              >
                Branches
              </button>
            </li>
          </ul>
          <div className="tab-content mt-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;