import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

const Shift_Schedule = () => {
  const [shifts, setShifts] = useState([
    { id: 1, employee: 'John Doe', date: '2023-10-01', time: '09:00 - 17:00', hours: 8 },
    { id: 2, employee: 'Jane Smith', date: '2023-10-02', time: '10:00 - 18:00', hours: 8 },
    { id: 3, employee: 'Alice Johnson', date: '2023-10-03', time: '08:00 - 16:00', hours: 8 },
  ]);

  const [editingShift, setEditingShift] = useState(null);
  const [formData, setFormData] = useState({ employee: '', date: '', time: '', hours: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (shift) => {
    setEditingShift(shift.id);
    setFormData(shift);
  };

  const handleSave = () => {
    setShifts((prevShifts) =>
      prevShifts.map((shift) =>
        shift.id === editingShift ? { ...shift, ...formData } : shift
      )
    );
    setEditingShift(null);
    setFormData({ employee: '', date: '', time: '', hours: '' });
  };

  const handleCancel = () => {
    setEditingShift(null);
    setFormData({ employee: '', date: '', time: '', hours: '' });
  };

  return (
    <div className="d-flex flex-row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9" style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h1>Shift Schedule</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Date</th>
              <th>Time</th>
              <th>Number of Hours</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift) => (
              <tr key={shift.id}>
                <td>{shift.employee}</td>
                <td>{shift.date}</td>
                <td>{shift.time}</td>
                <td>{shift.hours}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(shift)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingShift && (
          <div className="mt-4">
            <h3>Edit Shift</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Employee</label>
                <input
                  type="text"
                  className="form-control"
                  name="employee"
                  value={formData.employee}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Time</label>
                <input
                  type="text"
                  className="form-control"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Number of Hours</label>
                <input
                  type="number"
                  className="form-control"
                  name="hours"
                  value={formData.hours}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-success me-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shift_Schedule;