import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import Sidebar from '../Components/Sidebar';
import { fetchReceipts, deleteReceipt } from '../Components/Store/Store'; 
import { Table, Button, Form, InputGroup } from 'react-bootstrap'; 

const Receipts = () => {
  const dispatch = useDispatch();
  const receipts = useSelector((state) => state.Receipt.items); 
//  console.log("Fetched Receipts:", receipts); // Debugging
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchReceipts());
  }, [dispatch]);

  const filteredReceipts = receipts.filter((receipt) =>
    receipt.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this receipt?')) {
      dispatch(deleteReceipt(id));
    }
  };

  const handlePrint = (id) => {
    console.log(`Printing receipt with ID: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Editing receipt with ID: ${id}`);
  };

  return (
    <div className="d-flex flex-row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9 p-4">
        <h1 className="mb-4">Receipts</h1>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search by Name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </InputGroup>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReceipts.length > 0 ? (
              filteredReceipts.map((receipt, index) => (
                <tr key={receipt.id}>
                  <td>{index + 1}</td>
                  <td>{receipt.name}</td>
                  <td>{receipt.transactionType}</td>
                  <td>${receipt.amount.toFixed(2)}</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handlePrint(receipt.id)}
                    >
                      Print
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(receipt.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(receipt.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No receipts found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Receipts;